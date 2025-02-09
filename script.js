document.addEventListener("DOMContentLoaded", function() {
    const storyText = document.getElementById("story-text");
    const choicesContainer = document.getElementById("choices-container");
    const continueBtn = document.getElementById("continue-btn");

    let currentScene = 0;  // Keeps track of the scene index

    // Story scenes in order
    const storyScenes = [
        {
            text: `"WELCOME BACK." <br> "YOU HAVE BEEN HERE BEFORE." <br> "YOU ALWAYS COME BACK." <br> "WHY?"`,
            buttonText: "CONTINUE",
            choices: []
        },
        {
            text: `"WHY DID YOU COME BACK?" <br> [Static. A faint breathing sound.]`,
            buttonText: "CONTINUE",
            choices: []
        },
        {
            text: `"How much do you remember?"`,
            buttonText: "",
            choices: [
                { text: `"I remember everything."`, next: 3 },
                { text: `"I don’t remember anything."`, next: 3 },
                { text: `"What is this?"`, next: 3 }
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
                { text: `"Pick up the Cube"`, next: 5 }
            ]
        },
        {
            text: `"Oh. It’s you." <br> "I wasn’t expecting you." <br> "You left, didn’t you?" <br> "But here you are."`,
            buttonText: "CONTINUE",
            choices: []
        },
        {
            text: `"Two players. That’s how it always starts." <br> "They solve the Cube. They unlock the game." <br> "One disappears." <br> "The other follows."`,
            buttonText: "CONTINUE",
            choices: []
        },
        {
            text: `"Wait." <br> "Something’s wrong." <br> [The train station darkens. The sky cracks.]`,
            buttonText: "CONTINUE",
            choices: []
        },
        {
            text: `"Pairs of kids who vanished." <br> "Every one of them played the game." <br> "Every one of them disappeared."`,
            buttonText: "CONTINUE",
            choices: []
        },
        {
            text: `"This isn’t right." <br> "You were already erased." <br> "So why are you still here?"`,
            buttonText: "CONTINUE",
            choices: []
        },
        {
            text: `"The pattern is failing." <br> "The game is breaking." <br> "You shouldn’t exist." <br> "But you do."`,
            buttonText: "CONTINUE",
            choices: []
        },
        {
            text: `"It doesn’t matter." <br> "The train is still moving." <br> "You know how this ends."`,
            buttonText: "CONTINUE",
            choices: []
        },
        {
            text: `A slip of paper inside the Cube. <br> "DON’T PLAY. DON’T TRUST IT. GET OUT BEFORE IT’S TOO LATE."`,
            buttonText: "CONTINUE",
            choices: []
        },
        {
            text: `"But they don’t listen." <br> "They never do." <br> "[LOADING… PLEASE WAIT.]"`,
            buttonText: "",
            choices: []
        }
    ];

    // Function to display story text
    function displayScene(index) {
        let scene = storyScenes[index];

        storyText.innerHTML = scene.text;
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
            continueBtn.textContent = scene.buttonText;
            if (scene.buttonText !== "") {
                continueBtn.classList.remove("hidden");
            }
        }

        // Add glitch effect randomly
        if (Math.random() > 0.8) {
            storyText.classList.add("glitch");
            setTimeout(() => {
                storyText.classList.remove("glitch");
            }, 1000);
        }
    }

    // Initial scene
    displayScene(0);

    // Continue button functionality
    continueBtn.addEventListener("click", () => {
        currentScene++;
        if (currentScene < storyScenes.length) {
            displayScene(currentScene);
        }
    });
});
