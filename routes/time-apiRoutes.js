var db = require("../models");

module.exports = function(app) {
  // Get all time
  app.get("/api/time", function(req, res) {
    db.Time.findAll({}).then(function(userTime) {
      res.json(userTime);
    });
  });

  // Create a new time
  app.post("/api/time", function(req, res) {
    db.Time.create(req.body.selectpicker).then(function(userTime) {
      res.json(userTime);
    });
  });

  //delete a time
  // app.delete("/api/time/:id", function(req, res) {
  //   db.Time.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(userTime) {
  //     res.json(userTime);
  //   });
  // });
};
