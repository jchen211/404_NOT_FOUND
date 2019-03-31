var db = require("../models");

module.exports = function(app) {
  // Get all properties
  app.get("/api/property", function(req, res) {
    db.Properties.findAll({}).then(function(userProperties) {
      res.json(userProperties);
      // console.log(userProperties);
    });
  });

  // Searches for properties by type
    app.get("/api/property/:id", function(req, res) {
      // console.log(req.query.propertyType);

      db.Properties.findAll({
        where: {
          propertyType: req.query.propertyType
        }
      }).then(function(results) {
        res.json(results);
              // console.log(results);

      });
    });

  // Create a new properties
  app.post("/api/property", function(req, res) {
    console.log(req.body);
    db.Properties.create(req.body).then(function(userProperties) {
      res.json(userProperties);
    });
  });

  //   var newProperties = req.body;

  //   Properties.create({
  //     propertiesType: newProperties.propertiesType,
  //     propertiesAddNum: newProperties.propertiesAddNum,
  //     propertiesAddStreet: newProperties.propertiesAddStreet,
  //     propertiesAddCity: newProperties.propertiesAddCity,
  //     propertiesAddSate: newProperties.propertiesAddSate,
  //     propertiesAddZIP: newProperties.propertiesAddZIP
  //   });
  //   res.status(204).end();
  // });

  //deletes a properties
  //   app.delete("/api/properties/:id", function(req, res) {
  //     db.Properties.destroy({
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(function(userProperties) {
  //       res.json(userProperties);
  //     });
  //   });
};