var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users/all", function(req, res) {
    db.User.findAll({}).then(function(userInfo) {
      res.json(userInfo);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function(userInfo) {
      // res.json(userInfo);
    });
  });

  //     var newUser = req.body;

  //     User.create({
  //       userName: newUser.userName,
  //       userPassword: newUser.userPassword,
  //       userPhone: newUser.userPhone,
  //       userEmail: newUser.userEmail,
  //       userCC: newUser.userCC,
  //     });
  //     res.status(204).end();
  //   });
  // });
};
