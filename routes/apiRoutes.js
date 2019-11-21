var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Department.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  
  app.get('/api/employee',function(req,res ){
      db.Employee.findAll({}).then(function(e) {
        res.json(e);
      });
  });
  app.get('/api/position',function(req,res ){
      db.Position.findAll({}).then(function(e) {
        res.json(e);
      });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Department.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Department.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
