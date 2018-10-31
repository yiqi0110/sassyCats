module.exports = function(sequelize, DataTypes) {
  var Scores = sequelize.define("Scores", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    player_name: DataTypes.TEXT,
    player_score: DataTypes.INTEGER
  });
  return Scores;
};
