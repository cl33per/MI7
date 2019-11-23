var db = require("../models");
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
//
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
//
app.get("/", function(req, res) {
      // If the user already has an account send them to the members page
      if (req.user) {
        // res.redirect("/members");
        res.redirect("/home");
      }
      res.sendFile(path.join(__dirname, "../public/signup.html"));
    });
    //
    app.get("/login", function(req, res) {
      // If the user already has an account send them to the members page
      if (req.user) {
        // res.redirect("/members");
        res.redirect("/home");
      }
      res.sendFile(path.join(__dirname, "../public/login.html"));
    });
    //
    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be 
    //redirected to the signup page
    // app.get("/members", isAuthenticated, function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/members.html"));
    // });


  // Load index page(home page)
  app.get("/home", isAuthenticated, function(req, res) {
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
