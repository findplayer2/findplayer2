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
// DOM elements
const loadingScreen = document.getElementById('loading-screen');
const storyContainer = document.getElementById('story-container');
const storyText = document.getElementById('story-text');
const pickUpBtn = document.getElementById('pick-up-btn');
const leaveBtn = document.getElementById('leave-btn');
const proceedBtn = document.getElementById('proceed-btn');

// Loading Screen Logic
loadingScreen.addEventListener('click', () => {
  loadingScreen.style.display = 'none'; // Hide loading screen
  storyContainer.style.display = 'flex'; // Show the story sequence
  storyText.innerHTML = `"Oh. It’s you." <br> "I wasn’t expecting you." <br> "You left, didn’t you?" <br> "You swore you wouldn’t." <br> "But here you are."`;
});

// First set of choices after the dialogue
pickUpBtn.addEventListener('click', () => {
  storyText.innerHTML = `"You picked up the Cube. Things are about to get strange..."`;
  proceedBtn.classList.remove('hidden'); // Show the proceed button
});

leaveBtn.addEventListener('click', () => {
  storyText.innerHTML = `"You left the Cube. Maybe you’ll regret it later."`;
  proceedBtn.classList.remove('hidden'); // Show the proceed button
});

// Proceed button action
proceedBtn.addEventListener('click', () => {
  storyText.innerHTML = `"Two players. That’s how it always starts." <br> "They think they’re just messing around." <br> "They solve the Cube. They unlock the game." <br> "One of them disappears." <br> "The other follows."`;
  proceedBtn.style.display = 'none'; // Hide the proceed button

  // Wait before showing the next part of the story
  setTimeout(() => {
    storyText.innerHTML = `"Then they both vanish." <br> "No one remembers them." <br> "No one remembers them." <br> "No one—"`;
    proceedBtn.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait for a few seconds before the next change
});

// Final proceed action
proceedBtn.addEventListener('click', () => {
  storyText.innerHTML = `"Wait." <br> "Something’s wrong." <br> "The train station darkens. The sky cracks." <br> "You shouldn’t be here." <br> "But you already know that, don’t you?" <br> "You always knew."`;
  proceedBtn.style.display = 'none'; // Hide the proceed button

  // Wait for another transition in the story
  setTimeout(() => {
    storyText.innerHTML = `"How long did you think you could outrun it?" <br> "How long did you think you could keep pretending?" <br> "Every time, two names."`;
    proceedBtn.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait again to increase suspense
});

// Next phase proceed action
proceedBtn.addEventListener('click', () => {
  storyText.innerHTML = `"Pairs of kids who vanished." <br> "Every one of them played the game." <br> "Every one of them disappeared." <br> "No one remembers them." <br> "The cursor moves on its own..."`;
  proceedBtn.style.display = 'none'; // Hide the proceed button

  setTimeout(() => {
    storyText.innerHTML = `"Two names—yours. And his." <br> "A date: Two years ago. The night Leo disappeared." <br> "Your name shouldn’t be here."`;
    proceedBtn.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait again
});

// The final breaking point
proceedBtn.addEventListener('click', () => {
  storyText.innerHTML = `"This isn’t right." <br> "You were already erased." <br> "You are not supposed to be here." <br> "So why are you still here?"`;
  proceedBtn.style.display = 'none'; // Hide the proceed button

  setTimeout(() => {
    storyText.innerHTML = `"The pattern is failing." <br> "The game is breaking." <br> "You are the anomaly." <br> "You shouldn’t exist." <br> "But you do."`;
    proceedBtn.style.display = 'inline'; // Show proceed again
  }, 3000); // Wait once more before ending
});

// Final choice and looping
proceedBtn.addEventListener('click', () => {
  storyText.innerHTML = `"It doesn’t matter." <br> "The train is still moving." <br> "It always was." <br> "You know how this ends."`;
  proceedBtn.style.display = 'none'; // Hide the proceed button

  setTimeout(() => {
    storyText.innerHTML = `"The game begins again." <br> "But this time..." <br> "A slip of paper inside the Cube." <br> "A message, handwritten. Your handwriting." <br> "DON’T PLAY. DON’T TRUST IT. GET OUT BEFORE IT’S TOO LATE."`;
    proceedBtn.style.display = 'inline'; // Show proceed again
  }, 3000); // Final delay before looping
});

// Final loop and end
proceedBtn.addEventListener('click', () => {
  storyText.innerHTML = `"But they don’t listen." <br> "They never do." <br> "[LOADING... PLEASE WAIT.]"`;
  proceedBtn.style.display = 'none'; // Hide the button for final closure

  setTimeout(() => {
    storyText.innerHTML = `"THIS IS NOT A GAME." <br> "It never was."`;
    proceedBtn.style.display = 'inline'; // Show the button one last time
  }, 3000); // Wait for the final message
});
</script>

</body>
</html>
