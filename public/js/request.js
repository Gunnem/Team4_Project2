var ingredient;

$("#submitNamebtn").on("click", function(event) {
  event.preventDefault();

 ingredient = $("#inputName").val().trim();

    var queryURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=6&ranking=1&ingredients='+ingredient

    console.log(ingredient);
    console.log(queryURL);
    $.ajax({
      url:queryURL,
      type:"GET",
      crossDomain: true,
      headers:{
        "X-RapidAPI-Key": "iO1JP0bW8vmshiir9bxd1hPu4sv4p1KhdBHjsnWR4JOwXs3gBt",
      }
    }).then(function(response){
      console.log(response);
      // console.log(response[0].title);
      for(var i=0; i<response.length; i++){
        $("#title"+i).text(response[i].title);
        $("#image"+i).css("background-image", "url("+response[i].image+")");

        $("#recipe"+i+" .saveRecipebtn").attr("data-recipeID",response[i].id);
        $("#recipe"+i+" .btn-link").attr("data-recipeID",response[i].id);
      }
    });
});
// end of ingredient call

var recipeID;

$(".btn-link").on("click", function(event) {
    
    event.preventDefault();
    
    recipeID = $(this).attr("data-recipeID") ;
    console.log(recipeID);

    var queryURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/' + recipeID + '/information'

    console.log(ingredient);
    console.log(queryURL);
    $.ajax({
      url:queryURL,
      type:"GET",
      crossDomain: true,
      headers:{
        "X-RapidAPI-Key": "iO1JP0bW8vmshiir9bxd1hPu4sv4p1KhdBHjsnWR4JOwXs3gBt",
      }
    }).then(function(response){
      console.log(response);
      
      // console.log(response[0].title);
      // $("#recipe"+i+" .btn-link").attr("href",response[i].sourceUrl);
      window.open(response.sourceUrl, '_blank');
    });    
});



// end of sourceUrl call

var recipeID;

$(".saveRecipebtn").on("click", function(event) {
    
    // event.preventDefault();
    
    recipeID = $(this).attr("data-recipeID") ;
    console.log(recipeID);

    var queryURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/' + recipeID + '/information'

    console.log(ingredient);
    console.log(queryURL);
    $.ajax({
      url:queryURL,
      type:"GET",
      crossDomain: true,
      headers:{
        "X-RapidAPI-Key": "iO1JP0bW8vmshiir9bxd1hPu4sv4p1KhdBHjsnWR4JOwXs3gBt",
      }
    }).then(function(response){
      console.log(response);
      
      // console.log(response[0].title);

    });    
});