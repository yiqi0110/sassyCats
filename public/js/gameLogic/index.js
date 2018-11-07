// Var ===================================================================
var Player = require("./playerLogic"); // also takes stuff in from the db? to be inplemented into the Player constructor
var ship = require("./shipLogic");
var battle = require("./battleLogic");

var goodEnding = {
    stuff: "Good Ending achieved. I'm almost proud of you."
};

var retireEnding = {
    stuff: "You retired, swine . . . I'm a bit hurt. Or that's what I would have said had I been sad you left, but I'm not."
};

var badEnding = {
    stuff: "You died . . . swine, try harder."
};
// These will have other info and such later



function checkIfDead() {
    if (player.hp <= 0) {
        console.log("death");
        console.log(badEnding.stuff);
        // go back to start screen
    } else {
        // return to game
    }
};

function checkIfRetire() {
    if (wish2retire) {
        ship.giveUp(percent);
        console.log(retireEnding.stuff);
    } else {
        // return to game
    }
};

function checkIfConquer() {
    if (wish2conquer) {
        ship.conquer();
    } else {
        // return to ship
    }
};
