module.exports = (sequelize, DataTypes) => {
  var Burgers = sequelize.define("Burgers", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burgers;
};