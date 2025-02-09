// DOM elements
const loadingScreen = document.getElementById('loading-screen');
const storyContainer = document.getElementById('story-container');
const choiceResult = document.getElementById('choice-result');
const proceedButton = document.getElementById('proceed-button');
const storyText = document.getElementById('story-text');
const pickUpBtn = document.getElementById('pick-up-btn');
const leaveBtn = document.getElementById('leave-btn');

// Loading screen logic – triggered by the first click
loadingScreen.addEventListener('click', () => {
  loadingScreen.style.display = 'none'; // Hide loading screen
  storyContainer.style.display = 'flex'; // Show the story sequence
  storyText.innerHTML = `"Wait." <br> "Something’s wrong." <br> "The train station darkens. The sky cracks."`;
});

// Story choices after the dialogue
pickUpBtn.addEventListener('click', () => {
  storyText.innerHTML = `"You shouldn’t be here." <br> "But you already know that, don’t you?" <br> "You always knew."`;
  proceedButton.style.display = 'inline'; // Show the "Continue" button
});

leaveBtn.addEventListener('click', () => {
  storyText.innerHTML = `"How long did you think you could outrun it?" <br> "How long did you think you could keep pretending?"`;
  proceedButton.style.display = 'inline'; // Show the "Continue" button
});

// Proceed button action - Transition to next story
proceedButton.addEventListener('click', () => {
  storyText.innerHTML = `"Every time, two names." <br> "Pairs of kids who vanished." <br> "Every one of them played the game." <br> "Every one of them disappeared."`;
  proceedButton.style.display = 'none'; // Hide the proceed button

  setTimeout(() => {
    storyText.innerHTML = `"No one remembers them." <br> "The cursor moves on its own..." <br> "Two names—yours. And his."`;
    proceedButton.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait for a few seconds before the next change
});

// The game is breaking - Transition to next phase
proceedButton.addEventListener('click', () => {
  storyText.innerHTML = `"This isn’t right." <br> "You were already erased." <br> "You are not supposed to be here." <br> "So why are you still here?"`;
  proceedButton.style.display = 'none'; // Hide the proceed button

  setTimeout(() => {
    storyText.innerHTML = `"The pattern is failing." <br> "The game is breaking." <br> "You are the anomaly." <br> "You shouldn’t exist." <br> "But you do."`;
    proceedButton.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait before ending
});

// Final looping choice
proceedButton.addEventListener('click', () => {
  storyText.innerHTML = `"It doesn’t matter." <br> "The train is still moving." <br> "It always was." <br> "You know how this ends."`;
  proceedButton.style.display = 'none'; // Hide the proceed button
  setTimeout(() => {
    storyText.innerHTML = `"The game begins again." <br> "But this time..." <br> "A slip of paper inside the Cube." <br> "A message, handwritten. Your handwriting." <br> "DON’T PLAY. DON’T TRUST IT. GET OUT BEFORE IT’S TOO LATE."`;
    proceedButton.style.display = 'inline'; // Show proceed again
  }, 3000); // Final wait
});

// End and final loop closure
proceedButton.addEventListener('click', () => {
  storyText.innerHTML = `"But they don’t listen." <br> "They never do." <br> "[LOADING... PLEASE WAIT.]"`;
  proceedButton.style.display = 'none'; // Hide button for final closure
  setTimeout(() => {
    storyText.innerHTML = `"Somewhere, a train moves through the night.
Somewhere, someone left.
Somewhere, someone stayed." <br> " And the code— it’s rewriting you. WELCOME BACK."`;
    proceedButton.style.display = 'inline'; // Show the button one last time
  }, 3000); // Wait for the final message
});
