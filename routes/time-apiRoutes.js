var db = require("../models");


module.exports = function(app) {
  // Get all time
  app.get("/api/time", function(req, res) {
    db.Times.findAll({}).then(function(userTime) {
      res.json(userTime);
    });
  });

  // Create a new time
  app.post("/api/time", function(req, res) {
    console.log(req.body);
    db.Times.create(req.body).then(function(userTime) {
      res.json(userTime);
    });
  });

  //delete a time
  // app.delete("/api/time/:id", function(req, res) {
  //   db.Times.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(userTime) {
  //     res.json(userTime);
  //   });
  // });
};
