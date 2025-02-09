document.addEventListener("DOMContentLoaded", function () {
    const playerNameInput = document.getElementById("player-name");
    const startButton = document.getElementById("start-button");
    const welcomeScreen = document.getElementById("welcome-screen");
    const choicesScreen = document.getElementById("choices-screen");

    startButton.addEventListener("click", () => {
        let playerName = playerNameInput.value.trim();
        if (!playerName) {
            alert("Enter your name. It matters.");
            return;
        }

        console.log(`Username entered: ${playerName}`); // Debugging

        // Hide username screen, go to choices
        welcomeScreen.classList.add("hidden");
        choicesScreen.classList.remove("hidden");

        // Subtle glitch when entering username
        setTimeout(() => {
            document.body.classList.add("glitch");
            setTimeout(() => document.body.classList.remove("glitch"), 300);
        }, 500);
    });
});

    const trainSound = document.getElementById("train-sound");

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
        loginMessage.classList.add("glitch"); // 👾 Add Glitch Effect

        // ⏳ Wait 2 seconds, then show horror sequence
        setTimeout(() => {
            loginScreen.classList.add("hidden");
            messageScreen.classList.remove("hidden");

            // 🎵 Play Spotify Music
            music.src += "&autoplay=1";

            // 🔊 Start Background SFX (Heartbeat & Train)
            heartbeat.play();
            trainSound.play();
            trainSound.volume = 0.6;

            displayNextMessage();
        }, 2000);
    });

    // 📌 Display Horror Messages One by One
    function displayNextMessage() {
        if (messageIndex < messages.length) {
            messageText.innerHTML = messages[messageIndex];
            messageIndex++;

            // 🔄 Add Glitch Effect Randomly
            if (Math.random() > 0.7) {
                messageText.classList.add("glitch");
            } else {
                messageText.classList.remove("glitch");
            }

        } else {
            messageText.innerHTML = "WELCOME BACK.";
        }

        // 🕵️‍♂️ Randomly Trigger "Someone is Watching" Effect
        if (Math.random() > 0.8) {
            flickerScreen();
        }
    }

    // 📌 Click to Reveal Next Message
    messageScreen.addEventListener("click", () => {
        displayNextMessage();
    });

    // 👀 SCREEN FLICKER EFFECT (Random "Someone is Watching")
    function flickerScreen() {
        document.body.style.backgroundColor = "white";
        setTimeout(() => {
            document.body.style.backgroundColor = "black";
        }, 100);
    }
});
<iframe id="background-music" style="display: none;" 
    src="https://open.spotify.com/embed/track/66MP31dDAEV6rsmMKDVm9o?utm_source=generator"
    width="0" height="0" frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
</iframe>
document.body.addEventListener("click", function playMusic() {
    let musicIframe = document.getElementById("background-music");

    // Reloading the iframe tricks the browser into playing
    let originalSrc = musicIframe.src;
    musicIframe.src = ""; 
    setTimeout(() => {
        musicIframe.src = originalSrc;
    }, 500);

    document.body.removeEventListener("click", playMusic);
}, { once: true }); // Only runs once
function addGlitchEffect(textElement) {
    let glitchText = textElement.innerHTML;
    
    // Randomly replace some letters with █ or distort them
    glitchText = glitchText.replace(/a/g, "█").replace(/e/g, "3").replace(/o/g, "Ø").replace(/s/g, "$");

    textElement.innerHTML = glitchText;

    // Remove glitch effect after a short time
    setTimeout(() => {
        textElement.innerHTML = textElement.dataset.originalText;
    }, 600);
}

// Apply glitch on later scenes
function applyGlitchEffectLater() {
    let storyText = document.getElementById("scene-text");
    storyText.dataset.originalText = storyText.innerHTML;

    setTimeout(() => addGlitchEffect(storyText), 3000);
}


