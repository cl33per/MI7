var db = require("../models");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  
  app.get("/", (req, res) => {
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/home", isAuthenticated, (req, res) => {
    db.Department.findAll({}).then(function (dbDepartment) {
      db.Employee.findAll({}).then(function (dbEmployee) {
        res.render("index", {
          msg: "The Mentor",
          departments: dbDepartment,
          employees: dbEmployee,
        });
      })
    });
  });

  app.get("/new_employee", (req, res) => {
    res.render("newProfile");
  });

  app.get("/department/:id", (req, res) => {
    db.Department.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbDepartment) {
      db.Employee.findAll({
        where: {
          DepartmentID: req.params.id
        }, limit: 15, offset: 60
      }).then(function (dbEmployee) {
        res.render("example", {
          example: dbDepartment,
          employees: dbEmployee
        });

      });
    });
  });

  app.get("*", (req, res) => {
    res.render("404");
  });
};