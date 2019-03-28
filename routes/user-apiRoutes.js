var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/new", function(req, res) {
    var newUser = req.body;

    Property.create({
      userName: newUser.userName,
      userPassword: newUser.userPassword,
      userPhone: newUser.userPhone,
      userEmail: newUser.userEmail,
      userCC: newUser.userCC,
    });
    res.status(204).end();
});
};