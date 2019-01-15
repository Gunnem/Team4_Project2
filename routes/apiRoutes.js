var db = require("../models");

var unirest = require("unirest");

//API CALL TO GET RECIPES
// unirest
//   .get(
//     "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=6&offset=0&query=tuna"
//   )
//   .header(
//     "X-RapidAPI-Key",
//     "7QfEL0WGpbmshILA0RWQxq6VJZG8p1kt7PNjsnb3yQA9eSgW8O"
//   )
//   .end(function(result) {
//     console.log("*****************RECIPE CALL*****************");
//     console.log(result.status, result.headers, result.body);
//   });

//Finds ingredients based on Recipe index#
unirest
  .get(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/7539/information"
  )
  .header(
    "X-RapidAPI-Key",
    "7QfEL0WGpbmshILA0RWQxq6VJZG8p1kt7PNjsnb3yQA9eSgW8O"
  )
  .end(function(result) {
    console.log("*****************SHOPPING LIST CALL*****************");
    // console.log(
    //   result.status,
    //   result.headers
    // );
    for (i = 0; i < result.body.extendedIngredients.length; i++) {
      console.log(result.body.extendedIngredients[i].name);
    }
  });

module.exports = function(app) {
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
}
