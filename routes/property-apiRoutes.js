var db = require("../models");

module.exports = function(app) {
  // Get all properties
  app.get("/api/property", function(req, res) {
    db.Properties.findAll({}).then(function(userProperties) {
      res.json(userProperties);
    });
  });

  // Searches for properties by type
    app.get("/api/property/:id", function(req, res) {

      db.Properties.findAll({
        where: {
          propertyType: req.query.propertyType
          // propertyTaken: false
        }
      }).then(function(results) {
        res.json(results);
      });
    });

  // Create a new properties
  app.post("/api/property", function(req, res) {
    db.Properties.create(req.body).then(function(userProperties) {
      res.json(userProperties);
    });
  });

  // app.put("/api/property/:id", function(req, res) {
  //   db.Properties.update(
  //     {propertyTaken: true},
  //     { propertyID: req.body.id})
  //   .then(function(userProperties) {
  //     res.json(userProperties);
  //   });
  // });

};