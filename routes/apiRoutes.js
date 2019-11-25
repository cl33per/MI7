var db = require("../models");
var Sequelize = require('sequelize');
var passport = require("passport");

module.exports = function (app) {

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  
  app.get("/api/departments", (req, res) => {
    db.Department.findAll({}).then(function (dbDepartment) {
      res.json(dbDepartment);
    });
  });
  
  app.get("/api/employees", (req, res) => {
    db.Employee.findAll({}).then(function (dbEmployee) {
      res.json(dbEmployee);
    });
  });
  
  app.get('/api/employee', (req, res) => {
    db.Employee.findAll({}).then(function (e) {
      res.json(e);
    });
  });
  
  app.get('/api/title', (req, res) => {
    db.Title.findAll({}).then(function (e) {
      res.json(e);
    });
  });
  
  app.get('/api/project', (req, res) => {
    db.Project.findAll({}).then(function (e) {
      res.json(e);
    });
  });
  
  app.get('/api/position', (req, res) => {
    db.Position.findAll({}).then(function (e) {
      res.json(e);
    });
  });
  
  app.get('/api/status', (req, res) => {
    const Op = Sequelize.Op;
    db.Employee.findAll({
      where: {
        [Op.or]: [{
          TitleId: 2
        }, {
          TitleId: 1
        }, {
          TitleId: 3
        }]
      }
    }).then(function (e) {
      res.json(e)
    });
  });
  
  app.get("/api/sample_data", (req, res) => {
    db.Employee.findAll({
      include: [{
        model: db.Department
      }]
    }).then(function (e) {
      res.json(e);
    });
  });
  
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json("/home");
  });

  app.post("/api/signup", (req, res) => {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });
  
  app.post("/api/departments", (req, res) => {
    db.Department.create(req.body).then(function (dbDepartment) {
      res.json(dbDepartment);
    });
  });
  
  app.post("/api/employee", (req, res) => {
    db.Employee.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      salary: req.body.salary,
      birth_date: req.body.birth_date,
      hire_date: req.body.hire_date,
      education: req.body.education,
      email: req.body.email,
      DepartmentId: req.body.DepartmentId,
      TitleId: req.body.TitleId,
      PositionId: req.body.PositionId,
    }).then(function (dbEmployee) {
      res.json(dbEmployee);
    });
  });
  
  app.delete("/api/departments/:id", (req, res) => {
    db.Department.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbDepartment) {
      res.json(dbDepartment);
    });
  });

  app.delete("/api/employees/:id", (req, res) => {
    db.Employee.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbEmployee) {
      res.json(dbEmployee);
    });
  });

 

    app.get("/api/sample_data1",(req, res) => {
      db.Employee.findAll({
        include:[
          {
            model: db.Title
          }
        ]
      }).then(function(e) {
        res.json(e);
      });
      });
};

