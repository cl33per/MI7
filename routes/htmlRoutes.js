var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Department.findAll({}).then(function(dbDepartment) {
      res.render("index", {
        msg: "The Mentor",
        examples: dbDepartment
      });
    });
  });

   // Render login page for entry
   app.get("/login", function(req, res) {
    res.render("login");
  });

     // Render dashboard page 
     app.get("/dashboard", function(req, res) {
      res.render("dashboard");
    });

     // Render new employee  page 
     app.get("/new_employee", function(req, res) {
     res.render("newProfile");
     });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

 
};
