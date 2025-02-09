// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const welcomeScreen = document.getElementById('welcome-screen');
const trainScene = document.getElementById('train-scene');
const notebookScene = document.getElementById('notebook-scene');
const glitchScene = document.getElementById('glitch-scene');
const finalLoop = document.getElementById('final-loop');
const continueButton = document.getElementById('continue-button');
const choices = document.querySelectorAll('#choices button');
const nameList = document.getElementById('name-list');

// Name Data
const names = [
    'Leo & Nia', 'Elliot & Sam', 'Alex & Taylor', 'Jamie & Chris'
];

// State Management
let state = {
    step: 0
};

// Show Notebook Names Dynamically
function showNames() {
    nameList.innerHTML = '';
    names.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
    });

    // Append the player's name
    const li = document.createElement('li');
    li.textContent = 'You & Leo';
    nameList.appendChild(li);
}

// Event Listeners
continueButton.addEventListener('click', () => {
    loadingScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
        trainScene.classList.remove('hidden');
    }, 3000); // Delay transition for immersion
});

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        trainScene.classList.add('hidden');
        notebookScene.classList.remove('hidden');
        showNames();
    });
});

// Transition from Notebook Scene
setTimeout(() => {
    notebookScene.classList.add('hidden');
    glitchScene.classList.remove('hidden');
}, 5000); // Automatically move forward

// Final Loop
setTimeout(() => {
    glitchScene.classList.add('hidden');
    finalLoop.classList.remove('hidden');
}, 7000);
