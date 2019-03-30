var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  // Load formlisting page
  app.get("/formlisting", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/formlisting.html"));
  });
  // Load formtime page
  app.get("/formtime", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/formtime.html"));
  });
  // Load search page
  app.get("/search", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};