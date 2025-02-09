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

    setTimeout(() => {
        loadingScreen.classList.add("hidden");
        usernameScreen.classList.remove("hidden");
    }, 3000);

    usernameSubmit.addEventListener("click", () => {
        playerName = usernameInput.value.trim();
        if (!playerName) {
            alert("Enter your name. It matters.");
            return;
        }

        usernameScreen.classList.add("hidden");
        securityScreen.classList.remove("hidden");
    });

    securitySubmit.addEventListener("click", () => {
        questionSelected = securityQuestion.value;
        userAnswer = securityAnswer.value.trim();

        if (!userAnswer) {
            alert("Answer the question. It’s important.");
            return;
        }

        // 💀 Simulate Poll Logging (Hidden)
        console.log(`POLL LOG: Question "${questionSelected}", Answer: "${userAnswer}"`);

        securityScreen.classList.add("hidden");
        horrorScreen.classList.remove("hidden");

        setTimeout(() => {
            horrorText.innerHTML = `"U

