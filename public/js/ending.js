$(document).ready(function () {
    var outcome = ["dead"];
    var score = [31, 415];

    // Set ending message
        // Dead
    if (outcome[0] === "dead") {
        $("#gameEndResult").text("You Died!");
        $("#gameEndMessage").text("As expected, but good job living up to expectations");
        $("#gameEnd").css("background-image", "url(images/dead.png)");

        // Enslaved
    } else if (outcome[0] === "enslaved") {
        $("#gameEndResult").text("You died a slave!");
        $("#gameEndMessage").text("I thought you would die but even my expectations weren't this low");
        $("#gameEnd").css("background-image", "url(images/enslaved.png)");

        // Won
    } else if (outcome[0] === "won") {
        $("#gameEndResult").text("Somehow you won!");
        $("#gameEndMessage").text("I didn't think you were capable but good job!");
        $("#gameEnd").css("background-image", "url(images/won.png)");

        // Wuss
    } else if (outcome[0] === "wuss") {
        $("#gameEndResult").text("You gave up?!");
        $("#gameEndMessage").text("Seriously?! Wow, that is disappointing...you big wuss");
        $("#gameEnd").css("background-image", "url(images/wuss.png)");
    };

    // Set user score
    $("#userScore").text(score);

    $(document).on("click", "#newGame", function () {
        // Reset all game stats here
        location.href = "/";
    });

    $(document).on("click", "#replay", function () {
        // Reset game stats but keep character
        location.href = "/ship";
    });

    $(document).on("click", "#conquer", function () {
        location.href = "/planet";
    });

    $(document).on("click", "#wuss", function () {
        location.href = "/ending";
    });

})