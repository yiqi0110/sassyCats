$(document).on("click", "#blastOff", function (e) {
    e.preventDefault;

    //Ajax call to set id in session storage
    $.get("/api/scores", function (data) {
        //Makes session storage match id in sql
        var player_id = (data.length + 1);
        var user = new Player($("#charName").val(), $("input[name='char']:checked").val(), 0, 10, 500, 1, player_id);
        sessionStorage.setItem("player", JSON.stringify(user))
        console.log(user);
    })
});

function Player(userName, avatar, score, attk, hp, level, id) {
    this.userName = userName,
        this.avatar = avatar,
        this.score = score,
        this.attk = attk,
        this.hp = hp,
        this.level = level,
        this.id = id
};