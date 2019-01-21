module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define("List", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    ingredient: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "ingredient"
    }
    // recipeName: DataTypes.STRING,
    // photo: DataTypes.STRING,
    // recipeNumber: DataTypes.INTEGER
  });
  return List;
};
