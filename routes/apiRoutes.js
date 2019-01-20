var db = require("../models");

var unirest = require("unirest");

var input = "tuna";

var recipeNumber = 12023;

//API CALL TO GET RECIPES
unirest
  .get(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=6&offset=0&query="+input
  )
  .header(
    "X-RapidAPI-Key",
    "7QfEL0WGpbmshILA0RWQxq6VJZG8p1kt7PNjsnb3yQA9eSgW8O"
  )
  .end(function(result) {
    console.log("*****************RECIPE CALL*****************");
    console.log("Recipe Name: " + result.body.results[0].title);
    console.log("id: " + result.body.results[0].id);
    console.log("Image: " + result.body.results[0].image);
  });



//Finds ingredients based on Recipe index#
unirest
  .get(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + recipeNumber + "/information"
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
    // console.log(result.body);
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
