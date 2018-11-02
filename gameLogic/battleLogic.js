// get planet
// get player
module.exports = {

    planetVSplayer: function (Player, planet) {
        // for each turn the player has 3 options of attack, "attack", "charge"(this will give the player a multipier for their attack), and "block"
        var turns = 0; // 3 for xs, 6 for sm, 9 for md, 12 for lg  // player and planet are both given the same number of turns
        var planet = {
            attk: 0,
            def: 0,
            hp: 0,
            level: 0,
            name: ""
        }; // these will be effected by the players level at each battle
        var Player = {
            attk: 0,
            def: 0,
            hp: 0,
            level: 0
        }; // these will be effected by the players level at each battle
        // planet is extra small 3 TURNS
        if (planet.orbital_period >= 25) {
            turns = 3;
            this.battle(turns, Player, planet);
        }
        // planet is small 6 TURNS
        else if (planet.orbital_period >= 75) {
            turns = 6;
            this.battle(turns, Player, planet);
        }
        // planet is medium 9 TURNS
        else if (planet.orbital_period >= 200) {
            turns = 9;
            this.battle(turns, Player, planet);
        }
        // planet is large 12 TURNS
        else {
            turns = 12;
            this.battle(turns, Player, planet);
        }
    },
    battle: function (turns, Player, planet) {
        var moves = {
            attack: {
                name: "attack",
                dmg: Player.attk
            },
            charge: {
                name: "charge",
                dmg: Player.attk
            },
            block: {
                name: "block",
                dmg: Player.def
            }
        };
        console.log("You have " + turns + " turns to conquer planet " + planet.name + ", try your best. Ha. Ha. . . . Ha.");
        if (PlayersTurn) {
            if (moves.attack) {
                planet.hp = Player.attk - planet.hp;
            } else if (moves.charge) {
                Player.attk = Player.attk * 2;
            } else if (moves.block) {
                Player.def = Player.def * 3;
            }
        };
        if (planetsTurn){
            if (moves.attack) {
                Player.hp = planet.attk - Player.hp;
            } else if (moves.charge) {
                planet.attk = planet.attk * 2;
            } else if (moves.block) {
                planet.def = planet.def * 3;
            }
        };
    }
};