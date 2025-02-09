// DOM elements
const startButton = document.getElementById('start-btn');
const usernameInput = document.getElementById('username');
const welcomeText = document.getElementById('welcome-text');
const characterCustomization = document.getElementById('character-customization');
const glitchScreen = document.getElementById('glitch-screen');
const glitchText = document.getElementById('glitch-text');
const submitCustomization = document.getElementById('submit-customization');

// Start the game when the Start button is clicked
startButton.addEventListener('click', () => {
    const username = usernameInput.value;

    if (!username) {
        alert("Please enter a username."); // Prevent empty usernames
        return;
    }

    // Show the character customization screen and update the welcome text
    welcomeText.textContent = `Welcome back, ${username}! You finally found me.`;
    characterCustomization.style.display = 'block';  // Show customization
    startButton.style.display = 'none';  // Hide the Start button

    // Start glitch effect after 5 seconds
    setTimeout(() => {
        glitchScreen.style.display = 'block';  // Show the glitch screen
        glitchText.classList.add('glitch');  // Apply glitch effect
    }, 5000);  // Trigger after 5 seconds
});

// Handle customization when the submit button is clicked
submitCustomization.addEventListener('click', () => {
    // Get the selected customization choices
    const hairColor = document.getElementById('hair').value;

    if (!hairColor) {
        alert("Please choose a hair color!"); // Ensure a customization is chosen
        return;
    }

    // Display the chosen customization and trigger glitch breakdown
    glitchText.textContent = `You chose ${hairColor}. But something's wrong...`;

    // Start glitch breakdown sequence
    setTimeout(() => {
        glitchText.textContent = "It’s been two years. Do you remember him?";
        setTimeout(() => {
            glitchText.textContent = "The map unfolds. The story resets.";
        }, 3000);  // After 3 seconds
    }, 2000);  // After 2 seconds
});

// Wait for 3 seconds after the page loads, then transition to the next page
window.onload = function () {
    setTimeout(function () {
        window.location.href = "character_screen.html";  // Transition to the next page
    }, 3000);  // Transition after 3 seconds
};
// Loading effect simulation
let progress = 0;
const loadingText = document.getElementById('loading-bar');

function updateLoading() {
    if (progress <= 100) {
        loadingText.textContent = '█'.repeat(progress / 10) + '▒'.repeat(10 - progress / 10) + ` ${progress}%`;
        progress += 10;
        setTimeout(updateLoading, 500);
    } else {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('game-container').style.display = 'block';
    }
}
window.onload = updateLoading;
function chooseCharacter(name) {
    document.getElementById('character-selection').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.getElementById('character-name').textContent = name;
}
let dialogues = [
    "Welcome back. I was waiting for you...",
    "Did you forget something?",
    "The world has always been leaving."
];
let index = 0;

function nextDialogue() {
    index++;
    if (index < dialogues.length) {
        document.getElementById('dialogue-text').textContent = dialogues[index];
    } else {
        document.getElementById('dialogue-box').style.display = 'none';
    }
}
let dialogues = [
    "Welcome back... I was waiting for you.",
    "You finally returned... but something is different.",
    "The world feels... wrong. You feel it too, right?"
];
let dialogueIndex = 0;

function nextDialogue() {
    dialogueIndex++;
    if (dialogueIndex < dialogues.length) {
        document.getElementById('dialogue-text').textContent = dialogues[dialogueIndex];
    } else {
        document.getElementById('dialogue-box').style.display = 'none';
    }
}
