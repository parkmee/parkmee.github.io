$(document).ready(function () {

    // array of projects, oldest to newest
    let projects = [
        {
            title: "Psychic Guessing Game",
            description: "Try to guess a random letter before your guesses run out. The most fun you will ever have in your life.",
            imgURL: "wk3-psychic-game.PNG",
            gameURL: "https://parkmee.github.io/Psychic-Game/",
            githubURL: "https://github.com/parkmee/Psychic-Game",
        },
        {
            title: "Safari Hangman",
            description: "Take a ride to the safari! Guess the letters of the word to spell the name of a safari animal",
            imgURL: "wk3-hangman.PNG",
            gameURL: "https://parkmee.github.io/Word-Guess-Game",
            githubURL: "https://github.com/parkmee/Word-Guess-Game",
        },
        {
            title: "Crystal Collector",
            description: "Collect colorful crystals. If the sum of your crystals equals the target number, you win!",
            imgURL: "wk4-crystal-collector.PNG",
            gameURL: "https://parkmee.github.io/unit-4-game",
            githubURL: "https://github.com/parkmee/unit-4-game",
        },
        /* {
            title: "Cat Fight!",
            description: "Select your cat and defeat all the other alley cats for the prize...a can of half eaten tuna. Yum!",
            imgURL: "wk4-cat-fight.PNG",
            gameURL: "https://parkmee.github.io/cat-fight",
            githubURL: "https://github.com/parkmee/cat-fight",
        }, */
        /* {
            title: "World Trivia",
            description: "Test your knowledge of world geography and culture in a race against the timer.",
            imgURL: "wk5-world-trivia.PNG",
            gameURL: "https://parkmee.github.io/TriviaGame",
            githubURL: "https://github.com/parkmee/TriviaGame",
        }, */
        {
            title: "World Trivia",
            description: "Giphy edition! Test your knowledge of world geography and culture in a race against the timer.",
            imgURL: "wk5-world-trivia-v2.PNG",
            gameURL: "https://parkmee.github.io/TriviaGame-v2",
            githubURL: "https://github.com/parkmee/TriviaGame-v2",
        },
        {
            title: "Video Game GIFs",
            description: "Add and search for gifs of your favorite video games. Click on the images to animate them.",
            imgURL: "wk-6-video-game-gifs.PNG",
            gameURL: "https://parkmee.github.io/giphy-search-tool",
            githubURL: "https://github.com/parkmee/giphy-search-tool",
        },
        {
            title: "Train Schedule",
            description: "See a schedule of trains and see their nearest time of arrival and minutes left to arrival.",
            imgURL: "wk-7-train-schedule.PNG",
            gameURL: "https://parkmee.github.io/train-schedule/",
            githubURL: "https://github.com/parkmee/train-schedule",
        },
        {
            title: "DishIt",
            description: "Feed your food craving. Search for and rate dishes at restaurants in your area.",
            imgURL: "dishit.PNG",
            gameURL: "https://mjkelley354.github.io/DishIt/",
            githubURL: "https://github.com/mjkelley354/DishIt",
        },
        {
            title: "LIRI Bot",
            description: "Find concerts, movies, and songs using a Language Interpretation and Recognition Interface (LIRI) Bot.",
            imgURL: "liri-bot.png",
            gameURL: "https://parkmee.github.io/liri-clone-app/",
            githubURL: "https://github.com/parkmee/liri-clone-app"
        },
        {
            title: "CLI Hangman",
            description: "Learn new words and definitions as you try to guess the letters in this command line interface game.",
            imgURL: "hangman_img.jpg",
            gameURL: "https://parkmee.github.io/CLI-guessing-game",
            githubURL: "https://github.com/parkmee/CLI-guessing-game"
        },
        {
            title: "Blamazon",
            description: "Full service shopping, inventory, and sales app for customers, managers, and supervisors.",
            imgURL: "blamazon.jpg",
            gameURL: "https://parkmee.github.io/blamazon",
            githubURL: "https://github.com/parkmee/blamazon"
        },
        {
            title: "Friend Finder",
            description: "Looking for a friend? Take this 10-question survey to find your perfect match in life or love.",
            imgURL: "friend-finder.PNG",
            gameURL: "https://friend-finder-mmp.herokuapp.com/",
            githubURL: "https://github.com/parkmee/friend-finder"
        },
        {
            title: "It's Burger Time",
            description: "Add a burger. Eat a burger. Demonstrates use of MySQL, custom ORMs, Express, Node.js, and Heroku.",
            imgURL: "burger-app.PNG",
            gameURL: "https://me-eat-burger.herokuapp.com/",
            githubURL: "https://github.com/parkmee/burger"
        },
    ]


    displayPortfolio();

    function displayPortfolio () {
        let j=0;
        for (let i in projects) {
            
            $(".portfolio-view").prepend(
                `
                    <div class="project-item d-inline-block text-center border border-dark rounded w-25">
                        <div class="img-box w-95">
                            <a href="${projects[j].gameURL}"" target="_blank">
                                <img class="game-img rounded" src="assets/images/${projects[j].imgURL}">
                            </a>
                        </div>
                        <div>
                            <h5 class="project-title">${projects[j].title}</h5>
                            <p class="project-description">${projects[j].description}</p>
                        </div>
                        <div class="row">
                            <div class="col text-center">
                            <a href="${projects[j].githubURL}" target="_blank"><i class="project-link fab fa-github-alt"></i></a>
                            <a href="${projects[j].gameURL}" target="_blank"><i class="project-link fas fa-image"></i></a>
                            </div>
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

    $(".email-icon").on("click", function() {
        window.location.href = `mailto:parkmee@gmail.com?subject=I saw your awesome portfolio`;
    })


})