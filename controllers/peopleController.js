'use strict'
const models = require('../models');
const People = models.People;
const Skill = models.Skill;
const PeopleSkill = models.PeopleSkill;

let getAllPeople = (req, res, next) => {
  People.findAll({
    order: ['id']
  })
  .then((data) => {
    res.json(data)
  })
}

let createNewPerson =(req, res, next) => {
  People.create({
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age
  })
  .then((data) => {
     res.json(data)
  })
}

let updatePerson = (req, res, next) => {
  People.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((data) => {
    data.update({
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age
    })
    .then((result) => {
      res.json(result)
    })
  })
}

let killPerson = (req, res, next) => {
  People.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((data) => {
    if (data > 0) {
      res.json({
        message: 'Person has been successfully!'
      })
    } else {
      res.json({
        message: 'ID not found'
      })
    }
    res.json(data)
  })
}

let seeProfile = (req, res, next) => {
  People.findAll({
    include: [
      {
        model: Skill,
        through: {
          where: {
            peopleId: req.params.id
          }
        }
      }
    ]
  }).then((data) => {
    for (var i = 0; i < data.length; i++) {
      if (data[i].dataValues.id == req.params.id) {
        res.json(data[i].dataValues)
      }
    }
  })
}

let giveSkill = (req, res, next) => {
  PeopleSkill.create({
    peopleId: req.params.id,
    skillId: req.body.skillId,
    skillpoint: req.body.point
  })
  .then((data) => {
    res.json(data)
  })
}

module.exports = {
  getAllPeople,
  createNewPerson,
  updatePerson,
  killPerson,
  seeProfile,
  giveSkill
}
