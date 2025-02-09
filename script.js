// DOM elements
const loadingScreen = document.getElementById('loading-screen');
const welcomeScreen = document.getElementById('welcome-screen');
const startButton = document.getElementById('start-button');
const choicesScreen = document.getElementById('choices-screen');
const proceedButton = document.getElementById('proceed-button');
const choiceResult = document.getElementById('choice-result');
const storyContainer = document.getElementById('story-container');

// Loading screen logic – triggered by the first click
loadingScreen.addEventListener('click', () => {
  loadingScreen.style.display = 'none'; // Hide loading screen
  welcomeScreen.style.display = 'flex'; // Show the welcome screen
});

// Start button to submit name and city
startButton.addEventListener('click', () => {
  const playerName = document.getElementById('player-name').value.trim();
  const playerCity = document.getElementById('player-city').value.trim();

  if (!playerName || !playerCity) {
    alert('Please enter both your name and city.');
    return;
  }

  welcomeScreen.style.display = 'none'; // Hide welcome screen
  choicesScreen.style.display = 'flex'; // Show choices screen
});

// Choices screen logic
document.querySelectorAll('.choice-button').forEach(button => {
  button.addEventListener('click', (e) => {
    const choice = e.target.dataset.choice;
    if (choice === 'everything') {
      choiceResult.textContent = '"No, you don’t."';
    } else if (choice === 'nothing') {
      choiceResult.textContent = '"Not yet."';
    } else if (choice === 'what') {
      choiceResult.textContent = '"You’ll see."';
    }

    choiceResult.style.display = 'block'; // Show the result text
    proceedButton.style.display = 'block'; // Show the "Continue" button
  });
});

// Proceed button action
proceedButton.addEventListener('click', () => {
  choicesScreen.style.display = 'none'; // Hide choices screen
  storyContainer.style.display = 'flex'; // Show the next story sequence
});

// Story sequence logic
document.querySelectorAll('#story-container .choice-button').forEach(button => {
  button.addEventListener('click', (e) => {
    const choice = e.target.dataset.choice;
    if (choice === 'pick-up') {
      alert("You picked up the Cube! Things are about to get strange...");
    } else {
      alert("You left the Cube. Maybe you’ll regret it.");
    }

    // You can then continue to the next part of the story
  });
});
