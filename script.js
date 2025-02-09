document.addEventListener("DOMContentLoaded", function() {
  // DOM Elements
  const loadingScreen = document.getElementById('loading-screen');
  const choicesScreen = document.getElementById('choices-screen');
  const proceedButton = document.getElementById('proceed-button');
  const storyContainer = document.getElementById('story-container');
  const storyText = document.getElementById('story-text');
  const pickUpBtn = document.getElementById('pick-up-btn');
  const leaveBtn = document.getElementById('leave-btn');
  const choiceResult = document.getElementById('choice-result');

  // 📌 STEP 1: Hide Loading Screen & Show Choices
  loadingScreen.addEventListener('click', () => {
    loadingScreen.classList.add("hidden");
    choicesScreen.classList.remove("hidden");
  });

  // 📌 STEP 2: Choices Interaction
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
      proceedButton.classList.remove("hidden"); // Show Continue button
    });
  });

  // 📌 STEP 3: Story Begins (Rubik's Cube Scene)
  proceedButton.addEventListener('click', () => {
    choicesScreen.classList.add("hidden");
    storyContainer.classList.remove("hidden");
    storyText.innerHTML = `"A Rubik’s Cube sits on a bench. Old, battered. Familiar."`;
  });

  // 📌 STEP 4: Interaction with Cube
  pickUpBtn.addEventListener('click', () => {
    storyText.innerHTML = `"You shouldn’t be here." <br> "But you already know that, don’t you?" <br> "You always knew."`;
    proceedButton.classList.remove("hidden");
  });

  leaveBtn.addEventListener('click', () => {
    storyText.innerHTML = `"How long did you think you could outrun it?" <br> "How long did you think you could keep pretending?"`;
    proceedButton.classList.remove("hidden");
  });

  // 📌 STEP 5: Next Events Unfold
  proceedButton.addEventListener('click', () => {
    storyText.innerHTML = `"Every time, two names." <br> "Pairs of kids who vanished." <br> "Every one of them played the game."`;
    proceedButton.classList.add("hidden");
    
    setTimeout(() => {
      storyText.innerHTML = `"No one remembers them." <br> "The cursor moves on its own..." <br> "Two names—yours. And his."`;
      proceedButton.classList.remove("hidden");
    }, 3000);
  });

  // 📌 STEP 6: The Game Breaks
  proceedButton.addEventListener('click', () => {
    storyText.innerHTML = `"This isn’t right." <br> "You were already erased." <br> "You are not supposed to be here."`;
    proceedButton.classList.add("hidden");

    setTimeout(() => {
      storyText.innerHTML = `"The pattern is failing." <br> "The game is breaking." <br> "You are the anomaly."`;
      proceedButton.classList.remove("hidden");
    }, 3000);
  });

  // 📌 STEP 7: Final Scene
  proceedButton.addEventListener('click', () => {
    storyText.innerHTML = `"It doesn’t matter." <br> "The train is still moving."`;
    proceedButton.classList.add("hidden");

    setTimeout(() => {
      storyText.innerHTML = `"The game begins again." <br> "But this time..." <br> "DON’T PLAY. DON’T TRUST IT. GET OUT BEFORE IT’S TOO LATE."`;
      proceedButton.classList.remove("hidden");
    }, 3000);
  });

  // 📌 STEP 8: Loop Closure
  proceedButton.addEventListener('click', () => {
    storyText.innerHTML = `"But they don’t listen." <br> "They never do." <br> "[LOADING... PLEASE WAIT.]"`;
    proceedButton.classList.add("hidden");

    setTimeout(() => {
      storyText.innerHTML = `"Somewhere, a train moves through the night.<br> And the code— it's rewriting you. WELCOME BACK."`;
    }, 3000);
  });
});
