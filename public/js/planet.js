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


    $(document).on("click", "#fight", function () {
        var freedom = Math.floor(Math.random() * 10 + 1);
        if (freedom <= 6) {
            // You escape
            $("#prisonModal").find(".modal-title").text("Holy cat!");
            $("#prisonModal").find("#prisonBody").text("Beyond all odds you managed to slip past the guards and escape.  I can't believe it.  I didn't think you had any skills or worth as a cat.");
            $("#prisonModal").find("#die").hide();
            $("#prisonModal").find("#fight").hide();
            $("#prisonModal").find(".escape").show();
        } else {
            // You die in slavery
            $("#prisonModal").find(".modal-title").text("Nope!");
            $("#prisonModal").find("#prisonBody").text("You were caught and the guards made an example out of you.  The other prisoners will think twice after seeing what happened to you.");
            $("#prisonModal").find("#fight").hide();
            $("#prisonModal").find("#die").show();
            // Redirect to /ending
        }
    });

    $(document).on("click", "#die", function () {
        location.href = "/death";
    });

    $(document).on("click", ".escape", function () {
        location.href = "/ship";
    });
})