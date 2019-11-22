var db = require("../models");

module.exports = function(app) {
  // Get all examples
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
  // app.get('/api/title', function(req,res){
  //   db.Title
  // });
  app.get('/api/position',function(req,res ){
      db.Position.findAll({}).then(function(e) {
        res.json(e);
      });
  });

  // Create a new example
  app.post("/api/departments", function(req, res) {
    db.Department.create(req.body).then(function(dbDepartment) {
      res.json(dbDepartment);
    });
  });

  app.post("/api/employees", function(req, res) {
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

  app.delete("/api/employees/:id", function(req, res) {
    db.Employee.destroy({ where: { id: req.params.id } }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });
};
