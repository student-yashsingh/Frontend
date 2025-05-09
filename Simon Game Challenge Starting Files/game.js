let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let started = false;
let level = 0;

$(document).keydown(function () {
    if (!started) {
        level = 0;
        gamePattern = [];
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    let rand_num = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[rand_num];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over! Press Any Key to Restart");

        startOver(); 
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}
