var db = require("../models");

module.exports = function(app) {
  // Get all propertys
  app.get("/api/propertys", function(req, res) {
    db.Property.findAll({}).then(function(userProperty) {
      res.json(userProperty);
    });
  });

  // Create a new property
  app.post("/api/new", function(req, res) {
    var newProperty = req.body;

    Property.create({
        propertyType: newProperty.propertyType,
        propertyAddNum: newProperty.propertyAddNum,
        propertyAddStreet: newProperty.propertyAddStreet,
        propertyAddCity: newProperty.propertyAddCity,
        propertyAddSate: newProperty.propertyAddSate,
        propertyAddZIP: newProperty.propertyAddZIP, 
    });
    res.status(204).end();
  };

  //deletes a property
  app.delete("/api/propertys/:id", function(req, res) {
    db.Property.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(userProperty) {
      res.json(userProperty);
    });
  });
};