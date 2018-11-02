module.exports = function(sequelize, DataTypes) {
  var Scores = sequelize.define("Scores", {
    player_name: DataTypes.TEXT,
    player_score: DataTypes.INTEGER
  });
  return Scores;
};
