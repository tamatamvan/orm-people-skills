'use strict';
module.exports = function(sequelize, DataTypes) {
  var People = sequelize.define('People', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return People;
};