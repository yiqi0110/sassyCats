$(document).ready(function () {

    // Background image array
    var background = ["desert", "ocean", "grass", "forrest", "jungle", "mechanical", "mountains", "frozen", "city", "volcanic"];
    // Planet type array
    var ptype = ["Desert", "Oceanic", "Grasslands", "Forrest", "Jungle", "Mechanical", "Mountainous", "Frozen", "City", "Volcanic"];
    // Choose random number
    var i = Math.floor(Math.random() * 10);
    // Set image and ptype
    $("#planetType").text(ptype[i]);
    $(".jumbotron").css("background-image", "url(images/" + background[i] + ".png)");

    // Amount of rolls to conquer planet
    var planetSize = [12];
    var time = planetSize;
    $("#planetLeft").text(time + 1);
    var def = 32;
    $("#planetDef").text(def);
    var score = 1000;
    var totalScore = [0];

    // Roll again button
    $(document).on("click", "#attack", function () {

        function add(a, b) {
            return parseFloat(a) + parseFloat(b);
        }

        if (time >= 0) {

            // Set roll values
            var user = Math.floor(Math.random() * 10 + 1);
            var comp = Math.floor(Math.random() * 10 + 1);
            $("#userRoll").text(user);
            $("#compRoll").text(comp);

            // If user wins
            if (user > comp) {
                $("#winlose").text("won");
                def = def - user;
                $("#planetDef").text(def);
                // and planet defense is 0
                if (def <= 0) {
                    $("#outcomeModal").find(".modal-title").text("Victory!")
                    $("#outcomeModal").find("#outcome").text("conquerd the planet and enslaved the inhabitants");
                    $("#outcomeModal").modal("toggle");
                    totalScore.push(score);
                    totalScore = totalScore.reduce(add);
                    console.log("Total score: " + totalScore);
                }
                // User loses
            } else if (user === comp) {
                $("#winlose").text("tied");
            } else {
                $("#winlose").text("lost");
            }

            // Update score
            if (planetSize[0] === 12) {
                score = (score - 83.33 + 3.14).toFixed(2);
                console.log("Score: " + score);
            } else if (planetSize[0] === 9) {
                score = (score - 111.11 + 3.14).toFixed(2);
                console.log("Score: " + score);
            } else if (planetSize[0] === 6) {
                score = (score - 166.66 + 3.14).toFixed(2);
                console.log("Score: " + score);
            } else if (planetSize[0] === 3) {
                score = (score - 333.33 + 3.14).toFixed(2);
                console.log("Score: " + score);
            }

            // Update time left
            $("#planetLeft").text(time);
            time--

            // user ran out of time
        } else {
            // Prison modal
            $("#prisonModal").find("#prisonBody").text("You are enprisoned as a slave!  The guards here don't like to deal with escaping prisoners so they just kill anyone who tries to run.  You have one chance to escape or you can live out the rest of your days as a slave.");
            $("#prisonModal").find(".escape").hide();
            $("#prisonModal").modal("toggle");
            totalScore.push(score);
            totalScore = totalScore.reduce(add);
            console.log(totalScore);
        }

    });

    $(document).on("click", "#fight", function () {
        var freedom = Math.floor(Math.random() * 10 + 1);
        if (freedom <= 6) {
            // You escape
            $("#prisonModal").find("#prisonBody").text("Beyond all odds you managed to slip past the guards and escape.  I can't believe it.  I didn't think you had any skills or worth as a cat.");
            $("#prisonModal").find("#die").hide();
            $("#prisonModal").find("#fight").hide();
            $("#prisonModal").find(".escape").show();
        } else {
            // You die in slavery
            $("#prisonModal").find("#prisonBody").text("You were caught and the guards made an example out of you.  The other prisoners will think twice after seeing what happened to you.");
            $("#prisonModal").find("#fight").hide();
            $("#prisonModal").find("#die").show();
            // Redirect to /ending
        }
    });

    $(document).on("click", "#die", function () {
        location.href = "/ending";
    });

    $(document).on("click", ".escape", function () {
        location.href = "/ship";
    });
})