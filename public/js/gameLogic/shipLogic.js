// Var ===================================================================
var temp = sessionStorage.getItem("player");
var newPlayer = $.parseJSON(temp);

// End of Vars

// Function declaration ==================================================
$(document).ready(function () {
    $("#charName").text(newPlayer.userName);
    $("#charImage").attr("src", newPlayer.avatar);
    $(".statsLevel").text(newPlayer.level);
    $(".statsPower").text(newPlayer.score);
    $("#score").text(newPlayer.score);
    var listPoint = $("li");
    // Matthew this is where you should do the high scores stuff. this goes to the win.html
    $("#highScores").append(listPoint);
})

$(document).on("click", "#return2game", function () {
    location.href = "/ship";
});
$(document).on("click", "#continue2death", function () {
    giveUp(3);
});




function giveUp(percent) {
    // percent is the number of planets you have to conquer multipied by 10
    var chance = percent * 10;
    // this being a interface, depending on if you continue, you have the chance of death.
    var yourChance = ((Math.floor(Math.random() * 10) + 1) * 10);
    if (yourChance > chance) {
        console.log(yourChance);
        $("#texto").text("Wow, you actually left. I'm almost a little sad you left. Just kidding. Ha. Ha. Ha. Ha. Ha. . . ");
        $("#return2game").hide();
        $("#continue2death").text("Leave. . .");
        $(document).on("click", "#continue2death", function () {
            document.body.innerHTML = '<h1>BYE BYE</h1>';
        });
    } else {
        $("#texto").text("Ha. Ha. Ha. Ha. Ha. . . You died. That's what you get for attempting to leave. Ha. Ha.");
    }

};
// End Function declarations


// Anything else =========================================================


// End Anything else