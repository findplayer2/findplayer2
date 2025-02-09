document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const usernameScreen = document.getElementById("username-screen");
  const usernameInput = document.getElementById("username-input");
  const usernameSubmit = document.getElementById("username-submit");

  let playerName = "";

  // Transition from Loading to Username Input
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    usernameScreen.classList.remove("hidden");
  }, 3000);

  // Handle Username Submission
  usernameSubmit.addEventListener("click", () => {
    playerName = usernameInput.value.trim();
    if (!playerName) {
      alert("Enter your name. It matters.");
      return;
    }

    console.log(`Player Name: ${playerName}`); // Debugging
    alert(`Welcome, ${playerName}.`);
  });
});

