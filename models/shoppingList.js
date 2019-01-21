module.exports = function(sequelize, DataTypes) {
  var ShoppingList = sequelize.define("ShoppingList", {
    ingredient: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return ShoppingList;
};
