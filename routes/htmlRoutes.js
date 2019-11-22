var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Department.findAll({}).then(function(dbDepartment) {
      db.Employee.findAll({}).then(function(dbEmployee) {
        res.render("index", {
          msg: "The Mentor",
          departments: dbDepartment,
          employees: dbEmployee
        });
      })
    });
  });

   // Render login page for entry
   app.get("/login", function(req, res) {
      res.render("login");
   });

     // Render new employee  page 
     app.get("/new_employee", function(req, res) {
        res.render("newProfile");
     });

  // Load example page and pass in an example by id
  app.get("/department/:id", function(req, res) {
    db.Department.findOne({ where: { id: req.params.id } }).then(function(dbDepartment) {
      res.render("example", {
        example: dbDepartment
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

 
};
