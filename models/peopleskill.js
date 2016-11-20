'use strict';
module.exports = function(sequelize, DataTypes) {
  var PeopleSkill = sequelize.define('PeopleSkill', {
    peopleId: DataTypes.INT,
    skillId: DataTypes.INT,
    skillpoint: DataTypes.INT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PeopleSkill;
};