module.exports = function(sequelize, DataTypes) {
  var ShoppingList = sequelize.define("ShoppingList", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    ingredient: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return ShoppingList;
};
