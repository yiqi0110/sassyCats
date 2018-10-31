// Var ===================================================================
var Player = require("./playerLogic");
// also takes stuff in from the db? to be inplemented into the Player constructor
var ship = require("./shipLogic");

var goodEnding = {
    stuff: "good Ending achieved"
};

var retireEnding = {
    stuff: "you retired swine . . ."
};

var badEnding = {
    stuff: "you died . . . swine, try harder"
};
// These will have other info and such later
// End of Vars

// Function calls ========================================================


// End of fucntion calls

// Function declaration ==================================================
module.exports = {

    checkIfDead: function () {
        if (player.hp <= 0) {
            console.log("death");
            console.log(badEnding.stuff);
            // go back to start screen
        } else {
            // return to game
        }
    },
    checkIfRetire: function(){
        if(wish2retire){
            ship.giveUp(percent);
        } else {
            // return to game
        }
    },
    checkIfConquer: function(){
        if(wish2conquer){
            ship.conquer();
        } else {
            // return to ship
        }
    }
    
    
    
    
    
    // End Function declarations
};
    
    // Anything else =========================================================


// End Anything else