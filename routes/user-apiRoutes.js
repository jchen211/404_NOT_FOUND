var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users/all", function(req, res) {
    db.Users.findAll({}).then(function(userInfo) {
      res.json(userInfo);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.Users.create(req.body).then(function(userInfo) {
      // res.json(userInfo);
    });
  });

  //     var newUser = req.body;

  //     Users.create({
  //       userName: newUsers.userName,
  //       userPassword: newUsers.userPassword,
  //       userPhone: newUsers.userPhone,
  //       userEmail: newUsers.userEmail,
  //       userCC: newUsers.userCC,
  //     });
  //     res.status(204).end();
  //   });
  // });
};
