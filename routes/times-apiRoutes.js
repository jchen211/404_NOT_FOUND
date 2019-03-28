var db = require("../models");

module.exports = function(app) {
  // Get all times
  app.get("/api/times", function(req, res) {
    db.Time.findAll({}).then(function(dbTimes) {
      res.json(dbTimes);
    });
  });

  // Create a new time
  app.post("/api/times", function(req, res) {
    db.Time.create(req.body).then(function(dbTimes) {
      res.json(dbTimes);
    });
  });

  //delete a time
  app.delete("/api/times/:id", function(req, res) {
    db.Time.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTimes) {
      res.json(dbTimes);
    });
  });
};