// DOM Elements
const welcomeScreen = document.getElementById("welcome-screen");
const characterSelection = document.getElementById("character-selection");
const storyScene = document.getElementById("story-scene");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const usernameInput = document.getElementById("username");
const dialogueBox = document.getElementById("dialogue-box");
const playerNameSpan = document.getElementById("player-name");
const selectButtons = document.querySelectorAll(".select-btn");

let playerName = "";
let selectedCharacter = "";

// Start the game
startBtn.addEventListener("click", () => {
  playerName = usernameInput.value.trim();
  if (!playerName) {
    alert("Please enter your name.");
    return;
  }
  welcomeScreen.classList.remove("active");
  characterSelection.classList.add("active");
});

// Select character
selectButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    selectedCharacter = e.target.dataset.character;
    characterSelection.classList.remove("active");
    storyScene.classList.add("active");
    playerNameSpan.textContent = playerName;
    loadStory();
  });
});

// Advance story
nextBtn.addEventListener("click", () => {
  dialogueBox.textContent = `"Somewhere, a train is moving through the night. Your journey begins..."`;
});

// Initialize first scene
window.onload = () => {
  welcomeScreen.classList.add("active");
};
