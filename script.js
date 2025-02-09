// DOM elements
const loadingScreen = document.getElementById('loading-screen');
const welcomeScreen = document.getElementById('welcome-screen');
const startButton = document.getElementById('start-button');
const choicesScreen = document.getElementById('choices-screen');
const proceedBtn = document.getElementById('proceed-button');
const storyText = document.getElementById('story-text');
const pickUpBtn = document.getElementById('pick-up-btn');
const leaveBtn = document.getElementById('leave-btn');
const choiceResult = document.getElementById('choice-result');

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

    choiceResult.style.display = 'block'; // Show result text
    proceedBtn.style.display = 'inline'; // Show the "Continue" button
  });
});

// Story Sequence logic after user interacts with Cube
proceedBtn.addEventListener('click', () => {
  // First transition: Rubik's Cube Scene
  storyText.innerHTML = `"Two players. That’s how it always starts." <br> "They think they’re just messing around." <br> "They solve the Cube. They unlock the game." <br> "One of them disappears." <br> "The other follows."`;
  proceedBtn.style.display = 'none'; // Hide the proceed button
  setTimeout(() => {
    storyText.innerHTML = `"Then they both vanish." <br> "No one remembers them." <br> "No one remembers them." <br> "No one—"`;
    proceedBtn.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait for a few seconds before the next change
});

// Next phase transition
proceedBtn.addEventListener('click', () => {
  storyText.innerHTML = `"Wait." <br> "Something’s wrong." <br> "The train station darkens. The sky cracks." <br> "You shouldn’t be here." <br> "But you already know that, don’t you?" <br> "You always knew."`;
  proceedBtn.style.display = 'none'; // Hide the proceed button
  setTimeout(() => {
    storyText.innerHTML = `"How long did you think you could outrun it?" <br> "How long did you think you could keep pretending?" <br> "Every time, two names."`;
    proceedBtn.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait again to increase suspense
});

// Next choice handling: Pairs of kids who vanished
proceedBtn.addEventListener('click', () => {
  storyText.innerHTML = `"Pairs of kids who vanished." <br> "Every one of them played the game." <br> "Every one of them disappeared." <br> "No one remembers them." <br> "The cursor moves on its own..."`;
  proceedBtn.style.display = 'none'; // Hide the proceed button
  setTimeout(() => {
    storyText.innerHTML = `"Two names—yours. And his." <br> "A date: Two years ago. The night Leo disappeared." <br> "Your name shouldn’t be here."`;
    proceedBtn.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait again for transition
});

// Final breaking point before loop closure
proceedBtn.addEventListener('click', () => {
  storyText.innerHTML = `"This isn’t right." <br> "You were already erased." <br> "You are not supposed to be here." <br> "So why are you still here?"`;
  proceedBtn.style.display = 'none'; // Hide the proceed button
  setTimeout(() => {
    storyText.innerHTML = `"The pattern is failing." <br> "The game is breaking." <br> "You are the anomaly." <br> "You shouldn’t exist." <br> "But you do."`;
    proceedBtn.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait before ending
});

// Final looping choice
proceedBtn.addEventListener('click', () => {
  storyText.innerHTML = `"It doesn’t matter." <br> "The train is still moving." <br> "It always was." <br> "You know how this ends."`;
  proceedBtn.style.display = 'none'; // Hide the proceed button
  setTimeout(() => {
    storyText.innerHTML = `"The game begins again." <br> "But this time..." <br> "A slip of paper inside the Cube." <br> "A message, handwritten. Your handwriting." <br> "DON’T PLAY. DON’T TRUST IT. GET OUT BEFORE IT’S TOO LATE."`;
    proceedBtn.style.display = 'inline'; // Show proceed again
  }, 3000); // Final wait
});

// End sequence and loop closure
proceedBtn.addEventListener('click', () => {
  storyText.innerHTML = `"But they don’t listen." <br> "They never do." <br> "[LOADING... PLEASE WAIT.]"`;
  proceedBtn.style.display = 'none'; // Hide button for final closure
  setTimeout(() => {
    storyText.innerHTML = `"THIS IS NOT A GAME." <br> "It never was."`;
    proceedBtn.style.display = 'inline'; // Show the button one last time
  }, 3000); // Final message before closure
});


