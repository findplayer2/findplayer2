document.addEventListener("DOMContentLoaded", function () {
    const gameText = document.getElementById("game-text");
    const choicesContainer = document.getElementById("choices-container");
    const continueBtn = document.getElementById("continue-btn");

    const staticSound = document.getElementById("static-sound");
    const trainSound = document.getElementById("train-sound");
    const whisperSound = document.getElementById("whisper-sound");

    let currentScene = 0;

    const scenes = [
        { text: `"LOADING... PLEASE WAIT."`, buttonText: "CONTINUE", choices: [] },
        { text: `"WELCOME BACK." <br> [The screen flickers.]`, buttonText: "CONTINUE", choices: [] },
        { text: `"YOU FINALLY FOUND ME." <br> "WELCOME BACK." <br> "I WAITED." <br> "I WAS STARTING TO THINK YOU WOULDN’T."`, buttonText: "CONTINUE", choices: [] },
        { text: `"YOU’RE STILL REAL, RIGHT?" <br> "DON’T TURN IT OFF THIS TIME."`, buttonText: "CONTINUE", choices: [] },
        { text: `Sign up. Enter your username. <br> It matters.`, buttonText: "CONTINUE", choices: [] },
        { text: `Security question:<br> "What was the first lie you told that ever came true?" <br> "If someone else was wearing your face, would you want to know?" <br> "Where were you on the night you went missing?"`, buttonText: "CONTINUE", choices: [] },
        { text: `"USERNAME TAKEN."`, buttonText: "CONTINUE", choices: [] },
        { text: `"WELCOME BACK." <br> "YOU HAVE BEEN HERE BEFORE."`, buttonText: "CONTINUE", choices: [] },
        { text: `"I wasn’t expecting you." <br> "You left, didn’t you?" <br> [Static. A faint breathing sound.]`, buttonText: "CONTINUE", choices: [] },
        { 
            text: `"How much do you remember?"`, 
            buttonText: "", 
            choices: [
                { text: `"I remember everything."`, next: 11 },
                { text: `"I don’t remember anything."`, next: 11 },
                { text: `"What is this?"`, next: 11 }
            ] 
        },
        { text: `"No, you don’t." <br> "Not yet."`, buttonText: "CONTINUE", choices: [] },
        { text: `A Rubik’s Cube sits on a bench. Old, battered. Familiar.`, buttonText: "", choices: [{ text: `"Pick up the Cube"`, next: 13 }] },
        { text: `"You left, didn’t you?" <br> "You swore you wouldn’t." <br> "But here you are."`, buttonText: "CONTINUE", choices: [] },
        { text: `"Two players. That’s how it always starts." <br> "They solve the Cube. They unlock the game." <br> "One disappears."`, buttonText: "CONTINUE", choices: [] },
        { text: `"The other follows." <br> "Then they both vanish." <br> "No one remembers them."`, buttonText: "CONTINUE", choices: [] },
        { text: `SYSTEM MESSAGE: "Wait. Something’s wrong." <br> [The train station darkens. The sky cracks.]`, buttonText: "CONTINUE", choices: [] },
        { text: `??? <br> "You shouldn’t be here." <br> "But you already know that, don’t you?"`, buttonText: "CONTINUE", choices: [] },
        { text: `A notebook appears. The pages turn on their own... <br> "Every time, two names."`, buttonText: "CONTINUE", choices: [] },
        { text: `"Your name shouldn’t be here."`, buttonText: "CONTINUE", choices: [] },
        { text: `SYSTEM MESSAGE: "The game is breaking. You are the anomaly. You shouldn’t exist. But you do."`, buttonText: "CONTINUE", choices: [] },
        { text: `"Do you want to remember?"`, buttonText: "", choices: [{ text: `"I want to find him."`, next: 24 }] },
        { text: `SYSTEM MESSAGE: "It doesn’t matter. The train is still moving. It always was. You know how this ends."`, buttonText: "CONTINUE", choices: [] },
        { text: `[Static. A new scene loads.] <br> A convenience store. Two kids laughing. A Rubik’s Cube in their hands.`, buttonText: "CONTINUE", choices: [] },
        { text: `"Hey, check this out." <br> "I think I figured it out."`, buttonText: "CONTINUE", choices: [] },
        { text: `"DON’T PLAY. DON’T TRUST IT. GET OUT BEFORE IT’S TOO LATE."`, buttonText: "CONTINUE", choices: [] },
        { text: `"LOADING… PLEASE WAIT."`, buttonText: "CONTINUE", choices: [] }
    ];

    function displayScene(index) {
        gameText.innerHTML = scenes[index].text;
        continueBtn.classList.remove("hidden");
        continueBtn.onclick = () => displayScene(index + 1);
    }

    displayScene(0);
});
