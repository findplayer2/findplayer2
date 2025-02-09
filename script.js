document.addEventListener("DOMContentLoaded", function() {
    const loginScreen = document.getElementById("login-screen");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-btn");
    const loginMessage = document.getElementById("login-message");
    const messageScreen = document.getElementById("message-screen");
    const messageText = document.getElementById("message-text");
    const music = document.getElementById("background-music");

    let messageIndex = 0;
    let messages = [
        "Uh oh...",
        "You're not supposed to be here.",
        "You were here before.",
        "You do not remember.",
        "Somewhere, someone is still playing.",
        "No one had left yet.",
        "You ask how the story ends.",
        "Somewhere, a train moves through the night.",
        "Somewhere, someone left.",
        "Somewhere, someone stayed.",
        "The code replies: 'You do not want to know.'",
        "But you will.",
        "And then you will forget.",
        "And then you will play again.",
        "WELCOME BACK."
    ];

    // 🎭 Handle Login Attempt
    loginButton.addEventListener("click", function() {
        let username = usernameInput.value.trim();
        let password = passwordInput.value.trim();

        if (username === "" || password === "") {
            loginMessage.textContent = "Both fields are required.";
            loginMessage.classList.remove("hidden");
            return;
        }

        // 🩸 Simulate "Username Taken"
        loginMessage.textContent = "Username taken...";
        loginMessage.classList.remove("hidden");

        // ⏳ Wait 2 seconds, then show horror sequence
        setTimeout(() => {
            loginScreen.classList.add("hidden");
            messageScreen.classList.remove("hidden");

            // 🎵 Play Spotify Music
            music.src += "&autoplay=1"; // Try forcing autoplay

            displayNextMessage();
        }, 2000);
    });

    // 📌 Display Horror Messages One by One
    function displayNextMessage() {
        if (messageIndex < messages.length) {
            messageText.innerHTML = messages[messageIndex];
            messageIndex++;
        } else {
            messageText.innerHTML = "WELCOME BACK.";
        }
    }

    // 📌 Click to Reveal Next Message
    messageScreen.addEventListener("click", () => {
        displayNextMessage();
    });
});
