var db = require("../models");

module.exports = function(app) {
  // Get all property
  app.get("/api/property/all", function(req, res) {
    db.Property.findAll({}).then(function(userProperty) {
      res.json(userProperty);
    });
  });

  // Create a new property
  app.post("/api/property", function(req, res) {
    console.log(req.body);
    db.Properties.create(req.body).then(function(userProperty) {
      // res.json(userProperty);
    });
  });

  //   var newProperty = req.body;

  //   Property.create({
  //     propertyType: newProperty.propertyType,
  //     propertyAddNum: newProperty.propertyAddNum,
  //     propertyAddStreet: newProperty.propertyAddStreet,
  //     propertyAddCity: newProperty.propertyAddCity,
  //     propertyAddSate: newProperty.propertyAddSate,
  //     propertyAddZIP: newProperty.propertyAddZIP
  //   });
  //   res.status(204).end();
  // });

  //deletes a property
  //   app.delete("/api/property/:id", function(req, res) {
  //     db.Property.destroy({
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(function(userProperty) {
  //       res.json(userProperty);
  //     });
  //   });
};
