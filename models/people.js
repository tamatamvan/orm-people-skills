'use strict';
module.exports = function(sequelize, DataTypes) {
  var People = sequelize.define('People', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        People.belongsToMany(models.Skill, {
          through: 'PeopleSkill',
          foreignKey: 'PeopleId'
        })
      }
    }
  });
  return People;
};
