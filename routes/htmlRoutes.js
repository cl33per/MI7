var db = require("../models");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var pageNumber = 1;
var pageSize = 10;
var currentDepartment;

module.exports = function (app) {
  
  app.get("/sign-up", (req, res) => {
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/", (req, res) => {
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
    console.log("current page: ", pageNumber);
    currentDepartment = req.params.id
    db.Department.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbDepartment) {
      db.Employee.findAll({
        where: {
          DepartmentID: req.params.id
        }, limit: 10, offset: 0
        // limit: 15, offset: 60
      }).then(function (dbEmployee) {
       
        res.render("example", {
          example: dbDepartment,
          employees: dbEmployee,
        });
      
      });
    });
  });

  app.get("/department/:id/employee_previous.html", (req, res) => {
    if (pageNumber > 1){
      db.Department.findOne({
        where: {
          id: req.params.id
        }
      }).then(function (dbDepartment) {
        db.Employee.findAll({
          where: {
            DepartmentID: req.params.id
          }, limit: pageSize, offset: (pageNumber - 1) * pageSize
          // limit: 15, offset: 60
        }).then(function (dbEmployee) {
          res.render("example", {
            example: dbDepartment,
            employees: dbEmployee
          });
          pageNumber -= 1
        });
      });
    }
    else {
      alert("You are on the first page")
    }
  });

  app.get("/department/:id/employee_result1.html", (req, res) => {
    db.Department.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbDepartment) {
      db.Employee.findAll({
        where: {
          DepartmentID: req.params.id
        }, limit: pageSize, offset: (pageNumber + 1) * pageSize
        // limit: 15, offset: 60
      }).then(function (dbEmployee) {
        res.render("example", {
          example: dbDepartment,
          employees: dbEmployee
        });
        pageNumber += 1
      });
    });
  });

  app.get("/department/:id/employee_result2.html", (req, res) => {
    db.Department.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbDepartment) {
      db.Employee.findAll({
        where: {
          DepartmentID: req.params.id
        }, limit: pageSize, offset: (pageNumber + 2) * pageSize
        // limit: 15, offset: 60
      }).then(function (dbEmployee) {
        res.render("example", {
          example: dbDepartment,
          employees: dbEmployee
        });
        pageNumber += 2
      });
    });
  });

  app.get("/department/:id/employee_result3.html", (req, res) => {
    db.Department.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbDepartment) {
      db.Employee.findAll({
        where: {
          DepartmentID: req.params.id
        }, limit: pageSize, offset: (pageNumber + 3) * pageSize
        // limit: 15, offset: 60
      }).then(function (dbEmployee) {
        res.render("example", {
          example: dbDepartment,
          employees: dbEmployee
        });
        pageNumber += 3
      });
    });
  });

  app.get("/department/:id/employee_next_result.html", (req, res) => {
    db.Department.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbDepartment) {
      db.Employee.findAll({
        where: {
          DepartmentID: req.params.id
        }, limit: pageSize, offset: (pageNumber + 1) * pageSize
        // limit: 15, offset: 60
      }).then(function (dbEmployee) {
        res.render("example", {
          example: dbDepartment,
          employees: dbEmployee
        });
        pageNumber += 1
      });
    });
  });
  app.get("*", (req, res) => {
    res.render("404");
  });
};