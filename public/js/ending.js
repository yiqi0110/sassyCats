$(document).ready(function () {
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