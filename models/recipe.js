module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    recipeName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Recipe"
    },
    photo:{
      type: DataTypes.STRING,
      defaultValue: "Photo"
    },
    recipeNumber:{
      type: DataTypes.INTEGER,
      defaultValue: 227961
    }
    // recipeName: DataTypes.STRING,
    // photo: DataTypes.STRING,
    // recipeNumber: DataTypes.INTEGER
  });
  return Recipe;
};
