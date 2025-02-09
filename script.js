// DOM elements
const loadingScreen = document.getElementById('loading-screen');
const welcomeScreen = document.getElementById('welcome-screen');
const startButton = document.getElementById('start-button');
const choicesScreen = document.getElementById('choices-screen');
const proceedButton = document.getElementById('proceed-button');
const storyContainer = document.getElementById('story-container');

// Simulate Loading Screen
setTimeout(() => {
  loadingScreen.style.display = 'none';
  welcomeScreen.style.display = 'block';
}, 3000); // 3-second loading screen

// Start Button Logic
startButton.addEventListener('click', () => {
  const playerName = document.getElementById('player-name').value.trim();
  const playerCity = document.getElementById('player-city').value.trim();

  if (!playerName || !playerCity) {
    alert('Please enter both your name and city.');
    return;
  }

  welcomeScreen.style.display = 'none';
  choicesScreen.style.display = 'block';
});

// Choice Buttons Logic
document.querySelectorAll('.choice-button').forEach(button => {
  button.addEventListener('click', (e) => {
    const choice = e.target.dataset.choice;
    const resultText = document.getElementById('choice-result');

    if (choice === 'everything') {
      resultText.textContent = '"No, you don’t."';
    } else if (choice === 'nothing') {
      resultText.textContent = '"Not yet."';
    } else if (choice === 'what') {
      resultText.textContent = '"You’ll see."';
    }

    resultText.style.display = 'block';
    proceedButton.style.display = 'block';
  });
});

// Proceed Button Logic
proceedButton.addEventListener('click', () => {
  window.location.href = 'scene.html'; // Go to scene.html
});

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
