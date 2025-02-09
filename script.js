// script.js

// Get DOM elements
const startBtn = document.getElementById("start-btn");
const welcomeScreen = document.getElementById("welcome-screen");
const sceneScreen = document.getElementById("scene-screen");
const playerGreeting = document.getElementById("player-greeting");

// Event listener for "Start" button
startBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();

    if (username === "") {
        alert("Please enter your name!");
        return;
    }

    // Update greeting and switch screens
    playerGreeting.textContent = `Player 1: ${username}. Player 2: Searching...`;
    welcomeScreen.style.display = "none";
    sceneScreen.style.display = "flex";
});
