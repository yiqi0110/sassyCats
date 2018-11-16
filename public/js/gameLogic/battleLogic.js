$(document).ready(function () {
    getPlanet();
});
// get planet
// get player

var battleText = {
    startBattle: {
        tooBig: "What?! You wish to fight this planet?! Your skills are not as great as you think. . . You might as well give up. But if you really wish to fight I'll help since you'll need it. . . ",
        tooSmall: "What!!! You really wish to waste your time on this measley planet? I suppose I'll help you wipe its existance from the universe. . . I'm not saying you're that good. . . Just that your enemy is so weak.",
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
};

var randomPlanet;
var temp = sessionStorage.getItem("player");
var newPlayer = $.parseJSON(temp);

function getPlanet() {
    $.get("/api/planets", function (data) {
        randomPlanet = data[Math.floor(Math.random() * 3827)];
        planetVSplayer(newPlayer, randomPlanet);
    });
};

// takes in player info and planet data is taking it

function planetVSplayer(player, planet) {
    // for each turn the player has 3 options of attack, "attack", "charge"(this will give the player a multipier for their attack), and "block"
    var turns = 0; // 3 for xs, 6 for sm, 9 for md, 12 for lg  // player and planet are both given the same number of turns
    var planet = {
        attk: 75,
        hp: 0,
        level: player.level,
        name: planet.planet_name,
        orbital_period: planet.orbital_period
    }; // these will be effected by the players level at each battle
    var player = {
        userName: player.userName,
        avatar: player.avatar,
        score: player.score,
        attk: player.attk,
        hp: player.hp,
        level: player.level,
        id: player.id
    }; // these will be effected by the players level at each battle
    
    $("#playerName").text(player.userName);
    $("#planetName").text(planet.name);
    
    
    // planet is extra small 3 TURNS
    if (planet.orbital_period <= 100) {
        turns = 3;
        planet.hp = 40;
        $("#player-move").text(battleText.startBattle.tooSmall);
    }
    // planet is small 6 TURNS
    else if (planet.orbital_period <= 500) {
        turns = 6;
        planet.hp = 100;
        $("#player-move").text(battleText.startBattle.tooSmall);
    }
    // planet is medium 9 TURNS
    else if (planet.orbital_period <= 1000) {
        turns = 9;
        planet.hp = 150;
        $("#player-move").text(battleText.startBattle.justRight);
    }
    // planet is large 12 TURNS
    else {
        turns = 12;
        planet.hp = 200;
        $("#player-move").text(battleText.startBattle.tooBig);
    }
    this.battle(turns, player, planet);
    console.log(player)
    console.log(planet)
};

function battle(turns, player, planet) {
    // var moves = {
    //     attack: {
    //         name: "attack",
    //         dmg: player.attk
    //     },
    //     charge: {
    //         name: "charge",
    //         dmg: player.attk
    //     },
    //     block: {
    //         name: "block",
    //         dmg: player.def
    //     }
    // };
    $("#planetLeft").text(turns);
    $("#planet-health").html(planet.hp);
    $("#userDef").text(player.hp);
    $("#compRoll").text(planet.attk);
    $("#userRoll").text(player.attk);

    var roundScore = 1000;

    $("#attack").click(function () {
        // console.log(this.inBattle.attackHit);
        $("#player-move").text("You insult me with that measley attempt at a hit. . . You dealed " + player.attk + " points of attack.");
        planet.hp -= player.attk
        planetsTurn[Math.floor(Math.random() * 3)]();
        turns--;
        $("#planetLeft").text(turns);
        updateScore("attack");
        checkOutcome();
    });

    $("#charge").click(function () {
        // console.log(this.inBattle.chargeHit);
        player.attk *= 2;
        $("#player-move").text("Your next attack damage will be " + player.attk + ". Like that'll be enough hahahah. . . ");
        planetsTurn[Math.floor(Math.random() * 3)]();
        turns--;
        $("#planetLeft").text(turns);
        updateScore("charge");
        checkOutcome();
    });

    $("#heal").click(function () {
        // console.log(this.inBattle.block);
        player.hp *= 2;
        $("#player-move").text("Your health increased to " + player.hp + ", but you don't look any better to me.");
        planetsTurn[Math.floor(Math.random() * 3)]();
        turns--;
        $("#planetLeft").text(turns);
        updateScore("heal");
        checkOutcome();
    });

    var planetsTurn = [
        function planetAttack() {
            player.hp -= planet.attk;
            $("#planet-move").text("ACK!!! Why did you allow yourself to be damaged!? Your remaining health is " + player.hp + ".");
        },
        function planetCharge() {
            planet.attk *= 2;
            $("#planet-move").text("Wait. . . Why did they stop their attack. . . They're probably charging up for their next attack, not that I think you'll be able to do anything about it. Ha.");
        },
        function planetHeal() {
            planet.hp *= 2;
            $("#planet-move").text("Wait? The planet isn't doing anything? Figure out what they're doing you hooligan!");
            turns++
        }
    ];

    function updateScore(moveType) {
        if (planet.orbital_period <= 100) {
            if(moveType === "attack"){
                roundScore = (parseInt(roundScore) - 123.33 + 3.14).toFixed(2);
                console.log("Score: " + parseInt(roundScore));
            } else if (moveType === "charge"){
                roundScore = (parseInt(roundScore) - 111.11 + 3.14).toFixed(2);
                console.log("Score: " + parseInt(roundScore));
            } else if (moveType === "heal"){
                roundScore = (parseInt(roundScore) + 100.14).toFixed(2);
                console.log("Score: " + parseInt(roundScore));
            }
        } else if (planet.orbital_period <= 500) {
            if(moveType === "attack"){
                roundScore = (parseInt(roundScore) - 86.66 + 3.14).toFixed(2);
                console.log("Score: " + parseInt(roundScore));
            } else if (moveType === "charge"){
                roundScore = (parseInt(roundScore) - 43.11 + 3.14).toFixed(2);
                console.log("Score: " + parseInt(roundScore));
            } else if (moveType === "heal"){
                roundScore = (parseInt(roundScore) + 100.14).toFixed(2);
                console.log("Score: " + parseInt(roundScore));
            }
        } else if (planet.orbital_period <= 1000) {
            if(moveType === "attack"){
                roundScore = (parseInt(roundScore) - 56.11 + 3.14).toFixed(2);
                console.log("Score: " + parseInt(roundScore));
            } else if (moveType === "charge"){
                roundScore = (parseInt(roundScore) - 26.11 + 3.14).toFixed(2);
                console.log("Score: " + parseInt(roundScore));
            } else if (moveType === "heal"){
                roundScore = (parseInt(roundScore) + 100.14).toFixed(2);
                console.log("Score: " + parseInt(roundScore));
            }
        } else if (planet.orbital_period > 1000) {
            if(moveType === "attack"){
                roundScore = (parseInt(roundScore) - 43.63 + 3.14).toFixed(2);
                console.log("Score: " + parseInt(roundScore));
            } else if (moveType === "charge"){
                roundScore = (parseInt(roundScore) - 25.11 + 3.14).toFixed(2);
                console.log("Score: " + parseInt(roundScore));
            } else if (moveType === "heal"){
                roundScore = (parseInt(roundScore) + 100.14).toFixed(2);
                console.log("Score: " + parseInt(roundScore));
            }
        }
    }

    function checkOutcome() {
        $("#planet-health").text(planet.hp);
        $("#userDef").text(player.hp);
        $("#compRoll").text(planet.attk);
        $("#userRoll").text(player.attk);

        if (planet.hp <= 0) {
            var planetOn = 0;
            player.hp = 500;
            player.level++;
            player.score += parseInt(roundScore) + (planet.hp * planet.hp);
            planetOn = player.level;
            player.attk = (planetOn * 3) + 10;
            sessionStorage.setItem("player", JSON.stringify(player));
            //Create dummy player object for sql high scores
            var highscorePlayer = {
                player_name: player.name,
                player_score: player.score,
                player_id: player.id
            }

            $.ajax({
                method: "PUT",
                url: "/api/scores",
                data: highscorePlayer
            });

            if (player.level >= 10) {
                location.href = "/win";
            };
            $("#outcomeModal").find(".modal-title").text("Victory!");
            $("#outcome-body").text("Congratulations! You Conquered " + planet.name + "!");
            $("#point-body").html(player.userName+" finished with <strong id='point-outcome'>"+ roundScore + "</strong> points this round.\nYour new Political Influnce is <strong id='point-outcome'>"+ player.score + "</strong>");
            $("#outcomeModal").modal("toggle");

        } else if (player.hp <= 0) {
            $.ajax({
                method: "PUT",
                url: "/api/scores",
                data: highscorePlayer
            });
            $("#prisonModal").find(".modal-title").text("Failure!");
            $("#prisonModal").find("#prisonBody").text("You died like a little child!  I had no faith in you and even I'm disappointed.");
            $("#prisonModal").find(".escape").hide();
            $("#prisonModal").find("#fight").hide();
            $("#prisonModal").modal("toggle");
            sessionStorage.setItem("player", JSON.stringify(player));

        } else if (turns === 0) {
            $.ajax({
                method: "PUT",
                url: "/api/scores",
                data: highscorePlayer
            });
            $("#prisonModal").find(".modal-title").text("Failure!");
            $("#prisonModal").find("#prisonBody").text("You are enprisoned as a slave!  The guards here don't like to deal with escaping prisoners so they just kill anyone who tries to run.  You have one chance to escape or you can live out the rest of your days as a slave.");
            $("#prisonModal").find(".escape").hide();
            $("#prisonModal").modal("toggle");
            player.hp = 500;
            player.attk = 10;
            sessionStorage.setItem("player", JSON.stringify(player));
        };
    };
};

