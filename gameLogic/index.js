// Var ===================================================================
var Player = require("./playerLogic");  // also takes stuff in from the db? to be inplemented into the Player constructor
var ship = require("./shipLogic");  
var battle = require("./battleLogic");

var goodEnding = {
    stuff: "Good Ending achieved. I'm almost proud of you."
};

var retireEnding = {
    stuff: "You retired swine . . . I'm a bit hurt. Or that's what I would have said had been sad you left, but I'm not."
};

var badEnding = {
    stuff: "You died . . . swine, try harder."
};
// These will have other info and such later

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
    
    
    
    
    
};
    