var db = require("../models");
var Sequelize = require('sequelize');

module.exports = function(app) {
  // Api deparment list //
  app.get("/api/departments", function(req, res) {
    db.Department.findAll({}).then(function(dbDepartment) {
      res.json(dbDepartment);
    });
  });

  app.get("/api/employees", function(req, res) {
    db.Employee.findAll({}).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });
  
  app.get('/api/employee',function(req,res ){
      db.Employee.findAll({}).then(function(e) {
        res.json(e);
      });
  });
  // Api titles list //
  app.get('/api/title', function(req,res){
    db.Title.findAll({}).then(function (e) { 
        res.json(e);
     });
  });
  // Api project list //
  app.get('/api/project', function(req,res){
    db.Project.findAll({}).then(function (e) { 
        res.json(e);
     });
  });
  //
  app.get('/api/position',function(req,res ){
      db.Position.findAll({}).then(function(e) {
        res.json(e);
      });
  });
  //find managers and executive //
  app.get('/api/status', function (req,res) {
    const Op = Sequelize.Op;
    db.Employee.findAll({
      where:{
        [Op.or]: [{TitleId: 2}, {TitleId: 1}, {TitleId:3}]
      }
    }).then(function (e) { 
        res.json(e)
      });
  });


  // Create a new example
  // app.post("/api/departments", function(req, res) {
  //   db.Department.create(req.body).then(function(dbDepartment) {
  //     res.json(dbDepartment);
  //   });
  // });
  
  //new employee form post//
  app.post("/api/employee", function(req, res) {
    db.Employee.create(req.body).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  // Delete an example by id
  app.delete("/api/departments/:id", function(req, res) {
    db.Department.destroy({ where: { id: req.params.id } }).then(function(dbDepartment) {
      res.json(dbDepartment);
    });
  });
  //route for list of mentors
  app.delete("/api/employees/:id", function(req, res) {
    db.Employee.destroy({ where: { id: req.params.id } }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });
};
