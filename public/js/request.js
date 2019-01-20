
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
        // give button an attr that is the Id number for spoonacular.
      }
      
    }); 
    // This line grabs the input from the textbox

    
   
    
});