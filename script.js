// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const playerNameInput = document.getElementById('player-name');
const playerCityInput = document.getElementById('player-city');
const startButton = document.getElementById('start-button');
const playerList = document.getElementById('player-list');

const characterSelection = document.getElementById('character-selection');
const neutralChibi = document.getElementById('neutral-chibi');
const chooseGirlButton = document.getElementById('choose-girl');
const chooseBoyButton = document.getElementById('choose-boy');

const nostalgicScene = document.getElementById('nostalgic-scene');
const welcomeText = document.getElementById('welcome-text');
const characterImage = document.getElementById('character-image');

// Neutral Chibi Source
neutralChibi.src = "neutral-chibi.png";

// Player List for Debugging
let playerData = [];

// Start Button Event
startButton.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();
    const playerCity = playerCityInput.value.trim();

    if (!playerName || !playerCity) {
        alert("Please enter both your name and city.");
        return;
    }

    // Save Player Data
    playerData.push({ name: playerName, city: playerCity });
    updatePlayerList();

    // Transition to Character Selection
    welcomeScreen.style.display = "none";
    characterSelection.classList.remove("hidden");
});

// Function: Update Player List (Debugging/Tracking)
function updatePlayerList() {
    playerList.innerHTML = "";
    playerData.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name} from ${player.city}`;
        playerList.appendChild(li);
    });
    playerList.classList.remove("hidden");
}

// Character Selection Events
chooseGirlButton.addEventListener('click', () => showNostalgicScene("girl"));
chooseBoyButton.addEventListener('click', () => showNostalgicScene("boy"));

// Show Nostalgic Scene
function showNostalgicScene(choice) {
    characterSelection.style.display = "none";
    nostalgicScene.classList.remove("hidden");

    welcomeText.textContent = "Welcome back, Player!";
    characterImage.src = choice === "girl" ? "girl-chibi.png" : "boy-chibi.png";
}
// When transitioning to the sunny background
function showSunnyBackground() {
    document.getElementById("nostalgic-scene").classList.remove("hidden"); // Show sunny scene
    document.getElementById("neutral-chibi").classList.add("hidden"); // Hide neutral chibi
    const chosenCharacter = document.querySelector(".character-options img:not(.hidden)");
    if (chosenCharacter) {
        chosenCharacter.classList.remove("hidden"); // Show chosen character (boy/girl)
    }
}
// On click of Start button, add cryptic hints
document.getElementById("start-button").addEventListener("click", () => {
    const name = document.getElementById("player-name").value;
    const city = document.getElementById("player-city").value;

    if (!name || !city) {
        alert("Please enter your name and city.");
        return;
    }

    // Add player details to the list for debug
    const playerList = document.getElementById("player-list");
    const newPlayer = document.createElement("li");
    newPlayer.textContent = `Player: ${name}, City: ${city}`;
    playerList.appendChild(newPlayer);

    // Show trace log
    document.getElementById("trace-log").classList.remove("hidden");

    // Transition to the next screen
    setTimeout(() => {
        document.getElementById("welcome-screen").classList.add("hidden");
        document.getElementById("character-selection").classList.remove("hidden");
    }, 2000); // Delay for cryptic trace log effect
});
// After choosing boy or girl
document.getElementById("choose-girl").addEventListener("click", () => {
    document.getElementById("character-selection").classList.add("hidden");
    document.getElementById("nostalgic-scene").classList.remove("hidden");
    document.getElementById("girl-character").classList.remove("hidden");
});

