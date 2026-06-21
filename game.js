const GAME_FILE = "game.json";

var world = null;

var state = {
    currentLocation: null
};

async function fetchGameData(file) {
    const data = await fetch(file);
    return data.json();
}

function saveState() {
    localStorage.setItem("detective_state", JSON.stringify(state));
}

function loadState() {
    let savedState = localStorage.getItem("detective_state");
    if (savedState) {
        state = JSON.parse(savedState);
    }
}

function updateLocationBackground(image) {
    let imgTag = document.getElementById("background");
    imgTag.src = image;
}

function updateLocationDescription(text) {
    let container = document.getElementById("location-text");
    container.innerText = text;
}

function render() {
    let location = world.rooms[state.currentLocation];
    if (!location) {
        throw new Error("Unknown location: " + newLocation) ;
        return;
    }

    updateLocationBackground(location.backgroundImage);
    updateLocationDescription(location.description);
}

function changeLocation(newLocation) {
    if (!(newLocation in world.rooms)) {
        throw new Error("Unknown location: " + newLocation) ;
    }
    state.currentLocation = newLocation;
    saveState();
    render();
}

async function init() {
    world = await fetchGameData(GAME_FILE);
    loadState();
    if (!state.currentLocation) {
        state.currentLocation = world.initialLocation;
    }
    render();
}

init();
