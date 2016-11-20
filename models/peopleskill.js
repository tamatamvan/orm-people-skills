'use strict';
module.exports = function(sequelize, DataTypes) {
  var PeopleSkill = sequelize.define('PeopleSkill', {
    peopleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'People',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    skillId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Skills',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    skillpoint: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PeopleSkill;
};
