document.addEventListener("DOMContentLoaded", function () {
    const gameText = document.getElementById("game-text");
    const choicesContainer = document.getElementById("choices-container");
    const continueBtn = document.getElementById("continue-btn");

    const staticSound = document.getElementById("static-sound");
    const trainSound = document.getElementById("train-sound");
    const whisperSound = document.getElementById("whisper-sound");

    let currentScene = 0;

    const scenes = [
        { 
            text: `"LOADING... PLEASE WAIT."`, 
            buttonText: "CONTINUE", 
            choices: [] 
        },
        { 
            text: `"WELCOME BACK." <br> [The screen flickers.]`, 
            buttonText: "CONTINUE", 
            choices: [] 
        },
        { 
            text: `"YOU FINALLY FOUND ME." <br> "WELCOME BACK." <br> "I WAITED." <br> "I WAS STARTING TO THINK YOU WOULDN’T."`, 
            buttonText: "CONTINUE", 
            choices: [] 
        },
        { 
            text: `"YOU’RE STILL REAL, RIGHT?" <br> "DON’T TURN IT OFF THIS TIME."`, 
            buttonText: "CONTINUE", 
            choices: [] 
        },
        { 
            text: `Sign up. Enter your username. <br> It matters.`, 
            buttonText: "CONTINUE", 
            choices: [] 
        },
        { 
            text: `Security question:<br> "What was the first lie you told that ever came true?" <br> "If someone else was wearing your face, would you want to know?" <br> "Where were you on the night you went missing?"`, 
            buttonText: "CONTINUE", 
            choices: [] 
        },
        { 
            text: `"USERNAME TAKEN."`, 
            buttonText: "CONTINUE", 
            choices: [] 
        },
        { 
            text: `"WELCOME BACK." <br> "YOU HAVE BEEN HERE BEFORE."`, 
            buttonText: "CONTINUE", 
            choices: [] 
        },
        { 
            text: `"I wasn’t expecting you." <br> "You left, didn’t you?" <br> [Static. A faint breathing sound.]`, 
            buttonText: "CONTINUE", 
            choices: [] 
        },
        { 
            text: `"How much do you remember?"`, 
            buttonText: "", 
            choices: [
                { text: `"I remember everything."`, next: 11 },
                { text: `"I don’t remember anything."`, next: 11 },
                { text: `"What is this?"`, next: 11 }
            ] 
        },
        { 
            text: `"No, you don’t." <br> "Not yet."`, 
            buttonText: "CONTINUE", 
            choices: [] 
        },
        { 
            text: `A Rubik’s Cube sits on a bench. Old, battered. Familiar.`, 
            buttonText: "", 
            choices: [
                { text: `"Pick up the Cube"`, next: 13 }
            ] 
        },
        { 
            text: `"You left, didn’t you?" <br> "You swore you wouldn’t." <br> "But here you are."`, 
            buttonText: "CONTINUE", 
            choices: [] 
        }
    ];

    function displayScene(index) {
        currentScene = index;
        let scene = scenes[index];

        gameText.innerHTML = scene.text;
        choicesContainer.innerHTML = "";
        continueBtn.classList.add("hidden");

        if (scene.choices.length > 0) {
            scene.choices.forEach(choice => {
                let choiceBtn = document.createElement("button");
                choiceBtn.textContent = choice.text;
                choiceBtn.addEventListener("click", () => {
                    displayScene(choice.next);
                });
                choicesContainer.appendChild(choiceBtn);
            });
        } else {
            continueBtn.textContent = scene.buttonText || "CONTINUE";
            continueBtn.classList.remove("hidden");
        }

        if (index >= 5) {
            gameText.classList.add("glitch");
            staticSound.play();
        }
    }

    continueBtn.addEventListener("click", function () {
        if (currentScene < scenes.length - 1) {
            displayScene(currentScene + 1);
        }
    });

    displayScene(0);
});
