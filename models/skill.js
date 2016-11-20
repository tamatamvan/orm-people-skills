'use strict';
module.exports = function(sequelize, DataTypes) {
  var Skill = sequelize.define('Skill', {
    skillname: DataTypes.STRING,
    skilltype: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Skill.belongsToMany(models.People, {
          through: 'PeopleSkill',
          foreignKey: 'skillId'
        })
      }
    }
  });
  return Skill;
};
