$(document).on("click", "#blastOff", function (e) {
    e.preventDefault;
    var user = new Player($("#charName").val(), $("input[name='char']:checked").val(), 0, 10, 500, 1);
    sessionStorage.setItem("player", JSON.stringify(user))
    console.log(user);
});

function Player(userName, avatar, score, attk, hp, level) {
    this.userName = userName,
        this.avatar = avatar,
        this.score = score,
        this.attk = attk,
        this.hp = hp,
        this.level = level
};