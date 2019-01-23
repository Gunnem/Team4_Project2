var ingredient;

$("#submitNamebtn").on("click", function(event) {
  event.preventDefault();

  ingredient = $("#inputName")
    .val()
    .trim();

  var queryURL =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=6&ranking=1&ingredients=" +
    ingredient;

  console.log(ingredient);
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    type: "GET",
    crossDomain: true,
    headers: {
      "X-RapidAPI-Key": "fT0kOsMhvlmshAdsALJxAu0NwGnyp1r07itjsn5HzfUTCXBPZS"
    }
  }).then(function(response) {
    console.log(JSON.stringify(response));
    // console.log(response[0].title);
    for (var i = 0; i < response.length; i++) {
      $("#title" + i).text(response[i].title);
      $("#image" + i).css("background-image", "url(" + response[i].image + ")");

      $("#recipe" + i + " .saveRecipebtn").attr(
        "data-recipeID",
        response[i].id
      );
      $("#recipe" + i + " .btn-link").attr("data-recipeID", response[i].id);
    }
  });
});
// end of ingredient call

var recipeID;

$(".btn-link").on("click", function(event) {
  event.preventDefault();

  recipeID = $(this).attr("data-recipeID");
  console.log(recipeID);

  var queryURL =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
    recipeID +
    "/information";

  console.log(ingredient);
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    type: "GET",
    crossDomain: true,
    headers: {
      "X-RapidAPI-Key": "fT0kOsMhvlmshAdsALJxAu0NwGnyp1r07itjsn5HzfUTCXBPZS"
    }
  }).then(function(response) {
    console.log(response);

    // console.log(response[0].title);
    // $("#recipe"+i+" .btn-link").attr("href",response[i].sourceUrl);
    window.open(response.sourceUrl, "_blank");
  });
});

// end of sourceUrl call

var recipeID;
var $exampleList = $("#example-list");

$(".saveRecipebtn").on("click", function(event) {
  // event.preventDefault();

  recipeID = $(this).attr("data-recipeID");
  console.log(recipeID);

  var queryURL =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
    recipeID +
    "/information";

  console.log(ingredient);
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    type: "GET",
    crossDomain: true,
    headers: {
      "X-RapidAPI-Key": "fT0kOsMhvlmshAdsALJxAu0NwGnyp1r07itjsn5HzfUTCXBPZS"
    }
  })
    // Loop to extract each ingredient from JSON response obj and post it to the database
    .then(function(response) {
      for (i = 0; i < response.extendedIngredients.length; i++) {
        var item = response.extendedIngredients[i].name;
        console.log("Ingredients: " + item);

        var shoppingListItem = {
          // id: i + 1,
          ingredient: item
        };
        $.ajax({
          headers: {
            "Content-Type": "application/json"
          },
          type: "POST",
          url: "api/examples",
          data: JSON.stringify(shoppingListItem)
        });
        var listItem = function(example) {
          var $a = $("<a>")
            .text(shoppingListItem.ingredient)
            .attr("href", "/example/" + example.id);
          var $li = $("<li>")
            .attr({
              class: "list-group-item",
              "data-id": shoppingListItem.id
            })
            .append($a);
          var $button = $("<button>")
            .addClass("btn btn-outline-info btn-sm float-right delete")
            .text("ｘ");

          $li.append($button);

          return $li;
        };
        // $exampleList.empty();
        $exampleList.append(listItem);
      }
    });
});
