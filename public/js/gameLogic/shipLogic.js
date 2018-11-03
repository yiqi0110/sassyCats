// Var ===================================================================


// End of Vars

// Function declaration ==================================================
module.exports = {

    shipsChoice: function() {
        // only if the front end sends a message back to me
    },

    giveUp: function(percent) {
        // percent is the number of planets you have to conquer multipied by 10
        var chance = percent * 10;
        console.log("Are you sure? you have " + chance + " percent chance of surviving given your current political influence.");
        // this being a interface, depending on if you continue, you have the chance of death.
        if (acceptFate) {
            var yourChance = ((Math.floor(Math.random() * 10) + 1) * 10);
            if (yourChance > chance) {
                console.log("Wow, you actually left. I'm almost a little sad you left. Just kidding. Ha. Ha. Ha. Ha. Ha. . . ");
            } else {
                console.log("Ha. Ha. Ha. Ha. Ha. . . You died. That's what you get for attempting to leave. Ha. Ha.");
            }
        }
    },

    conquer: function() {
        // goes to planet to try to conquer it.
    }

    // End Function declarations

};
// Anything else =========================================================


// End Anything else