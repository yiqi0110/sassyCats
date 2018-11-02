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
                console.log(this.inBattle.attackHit);
                console.log("You insult me with that measley attempt at a hit. . . You dealed " + Player.attk + " points of attack.");
                planet.hp = Player.attk - planet.hp;
                console.log(planet.name + "'s new health is " + planet.hp);
            } else if (moves.charge) {
                console.log(this.inBattle.chargeHit);
                Player.attk = Player.attk * 2;
                console.log("You next attack damage will be " + Player.attk + ". Like that'll be enough hahahah. . . ");
            } else if (moves.block) {
                console.log(this.inBattle.block);
                Player.def = Player.def * 3;
                console.log("You're only lucky that you're using me as a sheild. Or else you'd be dead.");
            } else {
                console.log(this.startBattle.giveUp);
            }
        };
        if (planetsTurn) {
            if (moves.attack) {
                Player.hp = planet.attk - Player.hp;
                console.log("ACK!!! Why did you allow them to damage me!? Your remaining health is " + Player.hp + ".");
            } else if (moves.charge) {
                planet.attk = planet.attk * 2;
                console.log("Wait. . . Why did they stop their attack. . . Their probably charging up for their next attack, not that I think you'll be able to do anything about it. Ha.");
            } else if (moves.block) {
                planet.def = planet.def * 3;
                console.log("Wait? There not doing anything? Figure out what there doing you hooligan!");
            }
        };
    },

    battleText: {
        startBattle: {
            tooBig: "What?! You wish to fight this planet?! Your skills are not as great as you think. . . You might as well give up. But if you really wish to fight I'll help since you'll need it. . . ",
            tooSmall: "Nani!!! You really wish to waste your time on this measley planet? I suppose I'll help you wipe its existance from the universe. . . I'm not saying your that good. . . Just that your enemy is so weak.",
            justRight: "Hmmm. . . even though a child could conquer this planet. . . looks like you found a planet that you actually have a chance of defeating. . . Good luck, is what you thought I'd say, but nope! If you die, I'll take it as a direct insult you baffoon!",
            giveUp: "You wish to leave? You kitty-baffoon. . . If you wish to do so there's not much I can do. As long as you know the consequences."
        },
        inBattle: {
            gotHit: "What!? you allowed yourself to get hit. . . So diappointed, not mad, just disappointed.",
            attackHit: "Wow, you actually made a hit. I'd almost be proud of you, but I'm not. . . You baffoon.",
            chargeHit: "You're really just going to charge? Well if you think it'll help you in the end. . . But if you miss I'll laugh.",
            block: "You're just going to sit there and take it? You ignorent baffoon. . . Well at least your hp didnt go down too much. . . Don't get the wrong idea. I don't like you. I'd just be upset if my structural integrity was damaged because of. You ingrate.",
            gotHitWCharge: "You baffoon, you allowed yourself to be damage by that?!?! You are a disgrace to all cat-kind.",
            gotBlocked: "Mugget?! Why'd you attack then? You should have charged. . . You ingrate.",
            gaveUp: "You wish to leave? In the heat of battle? I told you you weren't prepared you disgraceful maggot.",
        },
        finshBattle: {
            win: "Hmmm. . . Ungraceful swine. But I suppose I should commend you for conquering this planet, even if an infant could.",
            lose: "Ha. Ha. Ha. . . Ha. . Alone again. . .",
            slavery: "I can't say I'm suprised you ingrate.",
        }
    },
    updateScore: function (score) {
        $.ajax({
            method: "PUT",
            url: "/api/scores",
            data: score
        });

}};

