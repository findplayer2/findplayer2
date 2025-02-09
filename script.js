document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ SCRIPT LOADED SUCCESSFULLY"); // Debugging

    // Get Screens
    const loadingScreen = document.getElementById("loading-screen");
    const usernameScreen = document.getElementById("username-screen");
    const securityScreen = document.getElementById("security-screen");
    const horrorScreen = document.getElementById("horror-screen");
    const popupMessage = document.getElementById("popup-message");

    // Inputs & Buttons
    const usernameInput = document.getElementById("username-input");
    const usernameSubmit = document.getElementById("username-submit");

    const securityQuestion = document.getElementById("security-question");
    const securityAnswer = document.getElementById("security-answer");
    const securitySubmit = document.getElementById("security-submit");

    const horrorText = document.getElementById("horror-text");
    const continueBtn = document.getElementById("continue-btn");

    const music = document.getElementById("background-music");

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

        // 💀 Log Poll Result Privately (Not Visible to User)
        console.log(`POLL LOG: Question "${questionSelected}", Answer: "${userAnswer}"`);

        securityScreen.classList.add("hidden");
        horrorScreen.classList.remove("hidden");

        setTimeout(() => {
            horrorText.innerHTML = `"USERNAME TAKEN."<br> "WELCOME BACK."<br> "YOU HAVE BEEN HERE BEFORE."`;
            continueBtn.classList.remove("hidden");
        }, 2000);
    });

    // 🎵 Start Music on First Click
    document.body.addEventListener("click", function playMusic() {
        music.play();
        document.body.removeEventListener("click", playMusic);
    });

    // 👁️ "Fate is Watching" Popup
    setTimeout(() => {
        popupMessage.classList.remove("hidden");
        setTimeout(() => {
            popupMessage.classList.add("hidden");
        }, 3000);
    }, 10000);
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ SCRIPT LOADED SUCCESSFULLY");

    // Screens
    const loadingScreen = document.getElementById("loading-screen");
    const clueScreen = document.getElementById("clue-screen");  // NEW
    const usernameScreen = document.getElementById("username-screen");
    const securityScreen = document.getElementById("security-screen");
    const horrorScreen = document.getElementById("horror-screen");

    // Inputs & Buttons
    const clueInput = document.getElementById("clue-input");  // NEW
    const clueSubmit = document.getElementById("clue-submit");  // NEW

    const usernameInput = document.getElementById("username-input");
    const usernameSubmit = document.getElementById("username-submit");

    const securityQuestion = document.getElementById("security-question");
    const securityAnswer = document.getElementById("security-answer");
    const securitySubmit = document.getElementById("security-submit");

    let playerClue = "";
    let playerName = "";
    let userAnswer = "";

    // 🔥 Start Game After Loading
    setTimeout(() => {
        loadingScreen.classList.add("hidden");
        clueScreen.classList.remove("hidden");  // First screen
    }, 3000);

    // 🕵️ Save Clue Answer & Move to Username Screen
    clueSubmit.addEventListener("click", () => {
        playerClue = clueInput.value.trim();
        if (!playerClue) {
            alert("Where did you find the clue?");
            return;
        }

        console.log(`📌 USER FOUND CLUE AT: ${playerClue}`);

        clueScreen.classList.add("hidden");
        usernameScreen.classList.remove("hidden");
    });

    // 📝 Save Username & Move to Security Question
    usernameSubmit.addEventListener("click", () => {
        playerName = usernameInput.value.trim();
        if (!playerName) {
            alert("Enter your name. It matters.");
            return;
        }

        console.log(`👤 USERNAME ENTERED: ${playerName}`);

        usernameScreen.classList.add("hidden");
        securityScreen.classList.remove("hidden");
    });

    // 🔥 Save Security Question Answer & Move to Horror Screen
    securitySubmit.addEventListener("click", () => {
        userAnswer = securityAnswer.value.trim();
        if (!userAnswer) {
            alert("Answer the question. It’s important.");
            return;
        }

        console.log(`💀 SECURITY QUESTION: ${securityQuestion.value}`);
        console.log(`📝 ANSWER: ${userAnswer}`);

        // 💾 Log All User Data Privately
        logPlayerData(playerName, playerClue, securityQuestion.value, userAnswer);

        securityScreen.classList.add("hidden");
        horrorScreen.classList.remove("hidden");
        setTimeout(() => {
            horrorText.innerHTML = `"USERNAME TAKEN."<br> "WELCOME BACK."<br> "YOU HAVE BEEN HERE BEFORE."`;
        }, 2000);
    });

    // 📜 Function to Log Player Data Privately
    function logPlayerData(username, clue, question, answer) {
        const logEntry = `User: ${username} | Clue Found At: ${clue} | Question: ${question} | Answer: ${answer}`;
        console.log(`📌 LOGGED PLAYER: ${logEntry}`);

        // 💾 Store Logs Locally (Can Be Sent to Server Later)
        let logList = localStorage.getItem("playerLogs") || "[]";
        let logs = JSON.parse(logList);
        logs.push(logEntry);
        localStorage.setItem("playerLogs", JSON.stringify(logs));
    }

    // 👁️ Display All Logs in Console for You
    console.log("🕵️ PLAYER LOGS:", JSON.parse(localStorage.getItem("playerLogs") || "[]"));
});
