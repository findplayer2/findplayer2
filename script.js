document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const usernameScreen = document.getElementById("username-screen");
    const securityScreen = document.getElementById("security-screen");
    const horrorScreen = document.getElementById("horror-screen");
    const popupMessage = document.getElementById("popup-message");

    const usernameInput = document.getElementById("username-input");
    const usernameSubmit = document.getElementById("username-submit");

    const securityQuestion = document.getElementById("security-question");
    const securityAnswer = document.getElementById("security-answer");
    const securitySubmit = document.getElementById("security-submit");

    const horrorText = document.getElementById("horror-text");
    const continueBtn = document.getElementById("continue-btn");

    let playerName = "";
    let questionSelected = "";
    let userAnswer = "";

    // 🔥 Start Game After Loading
    setTimeout(() => {
        loadingScreen.classList.add("hidden");
        usernameScreen.classList.remove("hidden");
    }, 3000);

    // 📝 Username Input
    usernameSubmit.addEventListener("click", () => {
        playerName = usernameInput.value.trim();
        if (!playerName) {
            alert("Enter your name. It matters.");
            return;
        }

        usernameScreen.classList.add("hidden");
        securityScreen.classList.remove("hidden");
    });

    // 🔥 Security Question Answer
    securitySubmit.addEventListener("click", () => {
        questionSelected = securityQuestion.value;
        userAnswer = securityAnswer.value.trim();

        if (!userAnswer) {
            alert("Answer the question. It’s important.");
            return;
        }

        // 💀 Simulate Hidden Poll Logging (You Will See in Console)
        console.log(`POLL LOG: Question "${questionSelected}", Answer: "${userAnswer}"`);

        securityScreen.classList.add("hidden");
        horrorScreen.classList.remove("hidden");

        setTimeout(() => {
            horrorText.innerHTML = `"USERNAME TAKEN."<br> "WELCOME BACK."<br> "YOU HAVE BEEN HERE BEFORE."`;
            continueBtn.classList.remove("hidden");
        }, 2000);
    });

    // 👁️ "Fate is Watching" Popup
    setTimeout(() => {
        popupMessage.classList.remove("hidden");
        setTimeout(() => {
            popupMessage.classList.add("hidden");
        }, 3000);
    }, 10000);

    // 🎵 Auto-Start Music on Click
    document.body.addEventListener("click", function playMusic() {
        let musicIframe = document.getElementById("background-music");

        let originalSrc = musicIframe.src;
        musicIframe.src = ""; 
        setTimeout(() => {
            musicIframe.src = originalSrc;
        }, 500);

        document.body.removeEventListener("click", playMusic);
    }, { once: true });
});
