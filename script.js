// DOM Elements
const loadingScreen = document.getElementById("loading-screen");
const dialogueScreen = document.getElementById("dialogue-screen");
const dialogueText = document.getElementById("dialogue-text");
const choicesContainer = document.getElementById("choices");
const continueButton = document.getElementById("continue-button");
const endScreen = document.getElementById("end-screen");
const endText = document.getElementById("end-text");
const glitchOverlay = document.getElementById("glitch-overlay");

// Script Data
const story = [
  { text: "LOADING... PLEASE WAIT.", options: null, next: 1 },
  { text: "WELCOME BACK.", options: null, next: 2 },
  { text: "YOU HAVE BEEN HERE BEFORE.", options: null, next: 3 },
  { text: "YOU ALWAYS COME BACK. WHY?", options: null, next: 4 },
  {
    text: "WHY DID YOU COME BACK?",
    options: [{ label: "CONTINUE", next: 5 }],
    next: null,
  },
  {
    text: "SYSTEM MESSAGE: How much do you remember?",
    options: [
      { label: "I remember everything.", next: 6 },
      { label: "I don’t remember anything.", next: 6 },
      { label: "What is this?", next: 6 },
    ],
    next: null,
  },
  {
    text: "SYSTEM MESSAGE: No, you don’t. Not yet.",
    options: null,
    next: 7,
  },
  {
    text: "A Rubik’s Cube sits on a bench. Old, battered. Familiar.",
    options: [
      { label: "YES", next: 8 },
      { label: "NO (Grayed out, unselectable)", next: null },
    ],
    next: null,
  },
  {
    text: "The moment you touch it, the screen distorts. A voice: \"Oh. It’s you.\"",
    options: null,
    next: 9,
  },
  {
    text: "The game is breaking. You are the anomaly.",
    options: [
      { label: "I want to remember.", next: 10 },
      { label: "I want to leave.", next: 10 },
      { label: "I want to find him.", next: 10 },
    ],
    next: null,
  },
  { text: "The train is still moving. It always was.", options: null, next: 11 },
  {
    text: "THIS IS NOT A GAME. It never was.",
    options: null,
    next: null,
  },
];

// State Variables
let currentSceneIndex = 0;

// Functions
function startGame() {
  loadingScreen.style.display = "none";
  dialogueScreen.style.display = "flex";
  showScene(0);
}

function showScene(index) {
  currentSceneIndex = index;
  const scene = story[index];
  dialogueText.textContent = scene.text;

  if (scene.options) {
    choicesContainer.innerHTML = "";
    choicesContainer.classList.remove("hidden");
    continueButton.classList.add("hidden");
    scene.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option.label;
      button.disabled = option.next === null;
      button.addEventListener("click", () => showScene(option.next));
      choicesContainer.appendChild(button);
    });
  } else {
    choicesContainer.classList.add("hidden");
    continueButton.classList.remove("hidden");
  }

  if (scene.next === null) {
    continueButton.classList.add("hidden");
    endScreen.style.display = "flex";
    dialogueScreen.style.display = "none";
    endText.textContent = scene.text;
  }
}

continueButton.addEventListener("click", () => {
  const scene = story[currentSceneIndex];
  if (scene.next !== null) {
    showScene(scene.next);
  }
});

// Initialize Game
setTimeout(() => {
  startGame();
  glitchOverlay.classList.remove("hidden");
}, 3000); // Simulated loading time
