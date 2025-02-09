document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const horrorScreen = document.getElementById("horror-screen");
    const sceneContainer = document.getElementById("scene-container");
    const sceneText = document.getElementById("scene-text");
    const choicesContainer = document.getElementById("choices-container");
    const continueBtn = document.getElementById("continue-btn");

    let currentScene = 0;

    // 🎭 The Horror Sequence Begins Here
    const scenes = [
        { text: `"USERNAME TAKEN."<br> "WELCOME BACK."<br> "YOU HAVE BEEN HERE BEFORE."`, buttonText: "CONTINUE", choices: [] },
        { text: `"I wasn’t expecting you." <br> "You left, didn’t you?" <br> [Static. A faint breathing sound.]`, buttonText: "CONTINUE", choices: [] },
        { text: `"How much do you remember?"`, buttonText: "", choices: [
            { text: `"I remember everything."`, next: 4 },
            { text: `"I don’t remember anything."`, next: 4 },
            { text: `"What is this?"`, next: 4 }
        ]},
        { text: `"No, you don’t." <br> "Not yet."`, buttonText: "CONTINUE", choices: [] },
        { text: `A Rubik’s Cube sits on a bench. Old, battered. Familiar.`, buttonText: "", choices: [
            { text: `"Pick up the Cube"`, next: 6 }
        ]},
        { text: `"You left, didn’t you?" <br> "You swore you wouldn’t." <br> "But here you are."`, buttonText: "CONTINUE", choices: [] },
        { text: `"Two players. That’s how it always starts." <br> "They think they’re just messing around." <br> "They solve the Cube. They unlock the game."`, buttonText: "CONTINUE", choices: [] },
        { text: `"One of them disappears." <br> "The other follows." <br> "Then they both vanish." <br> "No one remembers them."`, buttonText: "CONTINUE", choices: [] },
        { text: `*Wait...* <br> *Something’s wrong.* <br> [The train station darkens. The sky cracks.]`, buttonText: "CONTINUE", choices: [] },
        { text: `???: <br> "You shouldn’t be here." <br> "But you already know that, don’t you?"`, buttonText: "CONTINUE", choices: [] },
        { text: `"Every time, two names." <br> "Pairs of kids who vanished." <br> "Every one of them played the game." <br> "Every one of them disappeared."`, buttonText: "CONTINUE", choices: [] },
        { text: `"This isn’t right." <br> "You were already erased." <br> "You are not supposed to be here." <br> "So why are you still here?"`, buttonText: "CONTINUE", choices: [] },
        { text: `"The pattern is failing." <br> "The game is breaking." <br> "You are the anomaly." <br> "You shouldn’t exist." <br> "But you do."`, buttonText: "CONTINUE", choices: [] },
        { text: `"It doesn’t matter." <br> "The train is still moving." <br> "It always was." <br> "You know how this ends."`, buttonText: "CONTINUE", choices: [] },
        { text: `[The whistle screams. The screen blinks to black.]`, buttonText: "CONTINUE", choices: [] },
        { text: `[Static. Then, a new scene loads.] <br> [A convenience store. Two kids laughing. A Rubik’s Cube in their hands.]`, buttonText: "CONTINUE", choices: [] },
        { text: `"Hey, check this out." <br> "I think I figured it out."`, buttonText: "CONTINUE", choices: [] },
        { text: `*A slip of paper inside the Cube.* <br> *A message, handwritten. Your handwriting.*`, buttonText: "CONTINUE", choices: [] },
        { text: `"DON’T PLAY. DON’T TRUST IT. GET OUT BEFORE IT’S TOO LATE."`, buttonText: "CONTINUE", choices: [] },
        { text: `"But they don’t listen." <br> "They never do." <br> [LOADING… PLEASE WAIT.]`, buttonText: "CONTINUE", choices: [] }
    ];

    function displayScene(index) {
        currentScene = index;
        let scene = scenes[index];

        sceneText.innerHTML = scene.text;
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
    }

    continueBtn.addEventListener("click", function () {
        if (currentScene < scenes.length - 1) {
            displayScene(currentScene + 1);
        }
    });

    // 🎭 Start after username is taken
    setTimeout(() => {
        horrorScreen.classList.remove("hidden");
        displayScene(0);
    }, 3000);
});

