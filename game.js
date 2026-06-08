const GAME_FILE = "game.json";
const INITIAL_LOCATION = "office";

var state = {
    world: null,
    current_location: INITIAL_LOCATION
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

function render(location_name) {
    let location = state.world[location_name];
    if (!location) {
        return;
    }

    updateLocationBackground(location.background_image);
    updateLocationDescription(location.description);
}

async function init() {
    state.world = await fetchGameData(GAME_FILE);
    render(state.current_location);
}

init();
