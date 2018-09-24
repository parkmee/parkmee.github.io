$(document).ready(function () {

    // array of projects, oldest to newest
    let projects = [
        {
            title: "Psychic Guessing Game",
            description: "Try to guess a random letter before your guesses run out",
            imgURL: "wk3-psychic-game.PNG",
            gameURL: "https://parkmee.github.io/Psychic-Game/",
        },
        {
            title: "Safari Hangman",
            description: "Take a ride to the safari! Guess the letters of the word to spell the name of a safari animal",
            imgURL: "wk3-hangman.PNG",
            gameURL: "https://parkmee.github.io/Word-Guess-Game",
        },
        {
            title: "Crystal Collector",
            description: "Collect colorful crystals. If the sum of your crystals equals the target number, you win!",
            imgURL: "wk4-crystal-collector.PNG",
            gameURL: "https://parkmee.github.io/unit-4-game",
        },
        {
            title: "Cat Fight!",
            description: "Select your cat and defeat all the other alley cats for the prize...a can of half eaten tuna. Yum!",
            imgURL: "wk4-cat-fight.PNG",
            gameURL: "https://parkmee.github.io/cat-fight",
        },
        {
            title: "World Trivia",
            description: "Test your knowledge of world geography and culture in a race against the timer.",
            imgURL: "wk5-world-trivia.PNG",
            gameURL: "https://parkmee.github.io/TriviaGame",
        },
        {
            title: "World Trivia",
            description: "Giphy edition! Test your knowledge of world geography and culture in a race against the timer.",
            imgURL: "wk5-world-trivia-v2.PNG",
            gameURL: "https://parkmee.github.io/TriviaGame-v2",
        },
        {
            title: "Video Game GIFs",
            description: "Add and search for gifs of your favorite video games. CLick on the images to animate them.",
            imgURL: "wk-6-video-game-gifs.PNG",
            gameURL: "https://parkmee.github.io/giphy-search-tool",
        },
    ]

    displayPortfolio();

    function displayPortfolio () {
        let j=0;
        for (let i in projects) {
            
            $(".portfolio-view").prepend(
                `
                    <div class="project-item d-inline-block text-center border border-dark rounded">
                        <div class="img-box">
                            <a href="${projects[j].gameURL}"" target="_blank">
                                <img class="game-img rounded" src="assets/images/${projects[j].imgURL}">
                            </a>
                        </div>
                        <div>
                            <h2 class="project-title">${projects[j].title}</h2>
                            <p class="project-description">${projects[j].description}</p>
                        </div>
                    </row>
                `
            )
            console.log(j);
            console.log(projects[j].title);
            console.log(projects[j].imgURL);
            j++;
        }
    }


})