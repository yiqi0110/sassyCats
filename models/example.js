module.exports = function(sequelize, DataTypes) {
  var Planets = sequelize.define("Planets", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    planet_name: DataTypes.TEXT,
    orbital_period: DataTypes.DOUBLE,
    planet_mass: DataTypes.DOUBLE,
    distance: DataTypes.DOUBLE
  });
  return Planets;
};
