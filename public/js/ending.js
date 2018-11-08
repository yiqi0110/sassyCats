$(document).ready(function () {
    var temp = sessionStorage.getItem("player");
    var newPlayer = $.parseJSON(temp);

    // Set user score
    $("#userScore").text(newPlayer.score);

    //Get highscores
    $.get("api/highscores", function(data){
        for(var i = 0; i < data.length; i++){
            var listItem = $("<li>" + data[i].player_name + ": " + data[i].player_score + "</li>");
            $("#highScores").append(listItem);
        };
    });

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
        location.href = "/wuss";
    });
});
