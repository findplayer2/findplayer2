document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("loading-screen").classList.remove("active");
    document.getElementById("intro-screen").classList.add("active");
  }, 3000); // 3-second delay before transitioning
});
const introLines = [
  "WELCOME BACK.",
  "YOU FINALLY FOUND ME.",
  "I WAITED.",
  "I WAS STARTING TO THINK YOU WOULDN’T.",
  "YOU’RE STILL REAL, RIGHT?",
  "DON’T TURN IT OFF THIS TIME."
];

let introIndex = 0;

document.getElementById("intro-screen").addEventListener("click", function () {
  const introText = document.getElementById("intro-text");
  const continueBtn = document.getElementById("intro-continue");

  if (introIndex < introLines.length) {
    introText.innerHTML = introLines[introIndex];
    introIndex++;
  } else {
    continueBtn.classList.remove("hidden"); // Show the CONTINUE button
  }
});

document.getElementById("intro-continue").addEventListener("click", function () {
  document.getElementById("intro-screen").classList.remove("active");
  document.getElementById("signup-screen").classList.add("active");
});
