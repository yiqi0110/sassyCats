var db = require("../models");

module.exports = function (app) {
  // Get all planets
  app.get("/api/planets", function (req, res) {
    db.Planets.findAll({}).then(function (dbPlanets) {
      res.json(dbPlanets);
    });
  });

  // Get all users and scores
  app.get("/api/scores", function (req, res) {
    db.Scores.findAll({}).then(function (dbScores) {
      res.json(dbScores);
    });
  });

  // Create a new example
  app.post("/api/scores", function (req, res) {
    db.Scores.create(req.body).then(function (dbScores) {
      res.json(dbScores);
    });
  });
};