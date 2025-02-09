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

    choiceResult.style.display = 'block'; // Show result text
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
// DOM Elements
const messageText = document.getElementById('message-text');
const responseContent = document.getElementById('response-content');
const choices = document.getElementById('choices');
const choiceButtons = document.querySelectorAll('.choice-button');

// Function to display the system message and initiate responses
function displayMessage(message, nextChoices = null) {
  messageText.textContent = message;
  choices.innerHTML = ''; // Clear previous choices
  choices.style.display = 'flex'; // Show choices

  if (nextChoices) {
    nextChoices.forEach(choice => {
      const button = document.createElement('button');
      button.classList.add('choice-button');
      button.textContent = choice.text;
      button.addEventListener('click', () => {
        handleChoice(choice.action);
      });
      choices.appendChild(button);
    });
  } else {
    choices.style.display = 'none'; // Hide choices if none
  }
}

// Function to handle user's choice and continue the story
function handleChoice(action) {
  if (action === 'whyCantILeave') {
    systemResponse("You’ve asked this before. It’s the same answer.\nIt doesn’t change. It never does.\nYou won’t leave. You can’t. You’ve already started this.");
  } else if (action === 'whosStillPlaying') {
    systemResponse("Somewhere, someone is still playing. Somewhere, someone left. Somewhere, someone stayed. You can’t escape this.");
  } else if (action === 'tellMeNext') {
    systemResponse("You already know the answer. You keep asking anyway. You’re not ready. But it’s too late now.");
  }
}

// Function to show system responses to the player's choice
function systemResponse(response) {
  responseContent.textContent = response;
  displayMessage(response, [
    { text: 'What do you want to do next?', action: 'whatNext' }
  ]);
}

// Displaying initial system message after Rubik’s Cube pick up
displayMessage("Do you hear that?\nThe train.", [
  { text: "Why can’t I leave?", action: 'whyCantILeave' },
  { text: "Who’s still playing?", action: 'whosStillPlaying' },
  { text: "Tell me what happens next.", action: 'tellMeNext' }
]);

// Handle further system responses based on user interaction
function handleFinalChoice(action) {
  if (action === 'whatNext') {
    displayMessage("The game doesn’t end until you say it does. Will you stop trying to leave?", [
      { text: "I’ll break free.", action: 'breakFree' },
      { text: "I accept what’s happening.", action: 'accept' },
      { text: "I’m done. Let’s see what happens.", action: 'done' }
    ]);
  } else if (action === 'breakFree') {
    systemResponse("You’ll try, but you’ll never break free.\nThe cycle will continue. Welcome back.");
  } else if (action === 'accept') {
    systemResponse("You accept it, but there’s nothing to accept.\nThis was never your choice.");
  } else if (action === 'done') {
    systemResponse("You’ll keep playing.\nAnd the train will keep moving.");
  }
}

