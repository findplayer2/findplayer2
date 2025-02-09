// DOM Elements
const startButton = document.getElementById('start-btn');
const usernameInput = document.getElementById('username');
const welcomeScreen = document.getElementById('welcome-screen');
const loadingScreen = document.getElementById('loading-screen');
const gameScene = document.getElementById('game-scene');
const progressBar = document.getElementById('progress-bar');
const percentText = document.getElementById('percent-text');
const messageText = document.getElementById('message-text');
const nextButton = document.getElementById('next-btn');

let loadingProgress = 0;
let dialogues = [
    "You’ve returned… but something’s changed.",
    "The world isn’t the same.",
    "Do you remember him?",
    "The map is loading… but it’s broken.",
    "Somewhere, the train is moving."
];
let dialogueIndex = 0;

// Start Button Event
if (startButton) {
    startButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (!username) {
            alert("Please enter your name.");
            return;
        }
        welcomeScreen.style.display = 'none';
        loadingScreen.style.display = 'block';
        simulateLoading();
    });
}

// Simulate Loading
function simulateLoading() {
    const interval = setInterval(() => {
        loadingProgress += 20;
        progressBar.style.width = `${loadingProgress}%`;
        percentText.textContent = `${loadingProgress}%`;

        if (loadingProgress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                gameScene.style.display = 'block';
                displayDialogue();
            }, 500);
        }
    }, 1000);
}

// Display Dialogue
function displayDialogue() {
    if (dialogueIndex < dialogues.length) {
        messageText.textContent = dialogues[dialogueIndex];
        dialogueIndex++;
    } else {
        nextButton.style.display = 'none';
        messageText.textContent = "The game is broken. Goodbye.";
    }
}

// Next Button Event
if (nextButton) {
    nextButton.addEventListener('click', displayDialogue);
}
// script.js

// DOM Elements
const startBtn = document.getElementById('start-btn');
const submitAvatarBtn = document.getElementById('submit-avatar');
const nextDialogueBtn = document.getElementById('next-dialogue');

const welcomeScreen = document.getElementById('welcome-screen');
const customizationScreen = document.getElementById('customization-screen');
const gameScene = document.getElementById('game-scene');

const playerNameInput = document.getElementById('player-name');
const statusText = document.getElementById('status-text');
const dialogueText = document.getElementById('dialogue-text');

// Dialogue Array
const dialogues = [
    "Welcome back... I was waiting for you.",
    "It’s been two years. Do you remember him?",
    "The map unfolds. The story resets.",
    "Somewhere, a train is moving through the night."
];
let dialogueIndex = 0;

// Start Button Logic
startBtn.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();
    if (!playerName) {
        alert("Please enter your name!");
        return;
    }

    statusText.innerText = `Player 1: Online. Player 2: Searching...`;
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        customizationScreen.style.display = 'flex';
    }, 1000);
});

// Avatar Customization
submitAvatarBtn.addEventListener('click', () => {
    customizationScreen.style.display = 'none';
    gameScene.style.display = 'flex';
});

// Dialogue Logic
nextDialogueBtn.addEventListener('click', () => {
    dialogueIndex++;
    if (dialogueIndex < dialogues.length) {
        dialogueText.innerText = dialogues[dialogueIndex];
    } else {
        dialogueText.innerText = "The game resets...";
        nextDialogueBtn.style.display = 'none';
    }
});
