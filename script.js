<!-- DOM elements -->
<div id="loading-screen">Click to Start</div>
<div id="welcome-screen" style="display: none;">
  <input id="player-name" type="text" placeholder="Enter your name">
  <input id="player-city" type="text" placeholder="Enter your city">
  <button id="start-button">Start</button>
</div>

<div id="choices-screen" style="display: none;">
  <p id="choice-result"></p>
  <button class="choice-button" data-choice="everything">I remember everything.</button>
  <button class="choice-button" data-choice="nothing">I don’t remember anything.</button>
  <button class="choice-button" data-choice="what">What is this?</button>
  <button id="proceed-button" style="display: none;">Proceed</button>
</div>

<div id="story-container" style="display: none;">
  <p id="story-text"></p>
  <button id="pick-up-btn">Pick up the Cube</button>
  <button id="leave-btn">Leave the Cube</button>
  <button id="proceed-btn" style="display: none;">Proceed</button>
</div>

<script>
// DOM elements
const loadingScreen = document.getElementById('loading-screen');
const welcomeScreen = document.getElementById('welcome-screen');
const startButton = document.getElementById('start-button');
const choicesScreen = document.getElementById('choices-screen');
const proceedButton = document.getElementById('proceed-button');
const choiceResult = document.getElementById('choice-result');
const storyContainer = document.getElementById('story-container');
const storyText = document.getElementById('story-text');
const pickUpBtn = document.getElementById('pick-up-btn');
const leaveBtn = document.getElementById('leave-btn');

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
    proceedButton.style.display = 'inline'; // Show the "Continue" button
  });
});

// Proceed button action
proceedButton.addEventListener('click', () => {
  choicesScreen.style.display = 'none'; // Hide choices screen
  storyContainer.style.display = 'flex'; // Show the next story sequence
  storyText.innerHTML = `"Oh. It’s you." <br> "I wasn’t expecting you." <br> "You left, didn’t you?" <br> "You swore you wouldn’t." <br> "But here you are."`;
  proceedButton.style.display = 'none'; // Hide proceed button after starting the next sequence
});

// Story sequence logic for Pick up the Cube or Leave it
pickUpBtn.addEventListener('click', () => {
  storyText.innerHTML = `"You picked up the Cube. Things are about to get strange..."`;
  proceedButton.style.display = 'inline'; // Show the proceed button
});

leaveBtn.addEventListener('click', () => {
  storyText.innerHTML = `"You left the Cube. Maybe you’ll regret it later."`;
  proceedButton.style.display = 'inline'; // Show the proceed button
});

// Proceed button action for story progression
proceedButton.addEventListener('click', () => {
  storyText.innerHTML = `"Two players. That’s how it always starts." <br> "They think they’re just messing around." <br> "They solve the Cube. They unlock the game." <br> "One of them disappears." <br> "The other follows."`;
  proceedButton.style.display = 'none'; // Hide the proceed button

  setTimeout(() => {
    storyText.innerHTML = `"Then they both vanish." <br> "No one remembers them." <br> "No one remembers them." <br> "No one—"`;
    proceedButton.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait for a few seconds before the next change
});

// The final set of choices and breaking down story elements
proceedButton.addEventListener('click', () => {
  storyText.innerHTML = `"Wait." <br> "Something’s wrong." <br> "The train station darkens. The sky cracks." <br> "You shouldn’t be here." <br> "But you already know that, don’t you?" <br> "You always knew."`;
  proceedButton.style.display = 'none'; // Hide the proceed button

  setTimeout(() => {
    storyText.innerHTML = `"How long did you think you could outrun it?" <br> "How long did you think you could keep pretending?" <br> "Every time, two names."`;
    proceedButton.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait again to increase suspense
});

// Next phase of story progression
proceedButton.addEventListener('click', () => {
  storyText.innerHTML = `"Pairs of kids who vanished." <br> "Every one of them played the game." <br> "Every one of them disappeared." <br> "No one remembers them." <br> "The cursor moves on its own..."`;
  proceedButton.style.display = 'none'; // Hide the proceed button

  setTimeout(() => {
    storyText.innerHTML = `"Two names—yours. And his." <br> "A date: Two years ago. The night Leo disappeared." <br> "Your name shouldn’t be here."`;
    proceedButton.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait again
});

// Final decision and looping sequence
proceedButton.addEventListener('click', () => {
  storyText.innerHTML = `"This isn’t right." <br> "You were already erased." <br> "You are not supposed to be here." <br> "So why are you still here?"`;
  proceedButton.style.display = 'none'; // Hide the proceed button

  setTimeout(() => {
    storyText.innerHTML = `"The pattern is failing." <br> "The game is breaking." <br> "You are the anomaly." <br> "You shouldn’t exist." <br> "But you do."`;
    proceedButton.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait before final sequence
});

// The final loop and closure
proceedButton.addEventListener('click', () => {
  storyText.innerHTML = `"It doesn’t matter." <br> "The train is still moving." <br> "It always was." <br> "You know how this ends."`;
  proceedButton.style.display = 'none'; // Hide the proceed button

  setTimeout(() => {
    storyText.innerHTML = `"The game begins again." <br> "But this time..." <br> "A slip of paper inside the Cube." <br> "A message, handwritten. Your handwriting." <br> "DON’T PLAY. DON’T TRUST IT. GET OUT BEFORE IT’S TOO LATE."`;
    proceedButton.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait for final transition
});

// End the loop with the final message
proceedButton.addEventListener('click', () => {
  storyText.innerHTML = `"But they don’t listen." <br> "They never do." <br> "[LOADING... PLEASE WAIT.]"`;
  proceedButton.style.display = 'none'; // Hide the button for final closure

  setTimeout(() => {
    storyText.innerHTML = `"THIS IS NOT A GAME." <br> "It never was."`;
    proceedButton.style.display = 'inline'; // Show the button one last time
  }, 3000); // Wait for the final message
});
</script>
