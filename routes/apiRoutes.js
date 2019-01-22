var db = require("../models");

module.exports = function(app) {
  app.post("/api/examples", function(req, res) {
    for (i = 0; i < result.body.extendedIngredients.length; i++) {
      console.log(
        "results.result.body.extendedIngredients[i].name: " +
          result.body.extendedIngredients[i].name
      );

      db.ShoppingList.create({
        ingredient: result.body.extendedIngredients[i].name
      }).then(function(dbExample) {
        res.json(dbExample);
      });
    }
  }),
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
