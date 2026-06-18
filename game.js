const GAME_FILE = "game.json";

var state = {
    world: null,
    current_location: null
};

async function fetchGameData(file) {
    const data = await fetch(file);
    return data.json();
}

function updateLocationBackground(image) {
    let img_tag = document.getElementById("background");
    img_tag.src = image;
}

function updateLocationDescription(text) {
    let container = document.getElementById("location-text");
    container.innerText = text;
}

function render() {
    let location = state.world.rooms[state.current_location];
    if (!location) {
        return;
    }

    updateLocationBackground(location.background_image);
    updateLocationDescription(location.description);
}

async function init() {
    state.world = await fetchGameData(GAME_FILE);
    state.current_location = state.world.initial_location;
    render();
}

init();
