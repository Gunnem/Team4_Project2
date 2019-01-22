var db = require("../models");

module.exports = function(app) {
  app.post("/api/examples", function(req, res) {
    db.ShoppingList.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.ShoppingList.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  }),
    // Delete an example by id
    app.delete("/api/examples/:id", function(req, res) {
      db.ShoppingList.destroy({ where: { id: req.params.id } }).then(function(
        dbExample
      ) {
        res.json(dbExample);
      });
    });
};
