module.exports = (sequelize, DataTypes) => {
  var Burgers = sequelize.define("Burgers", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  return Burgers;
}