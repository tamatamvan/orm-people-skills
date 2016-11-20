'use strict'
const models = require('../models');
const Skill = models.Skill;

let getAllSkill = (req, res, next) => {
  Skill.findAll({
    order: ['id']
  })
  .then((data) => {
    res.json(data)
  })
}

let createNewSkill =(req, res, next) => {
  Skill.create({
    skillname: req.body.skillname,
    skilltype: req.body.skilltype
  })
  .then((data) => {
     res.json(data)
  })
}

let updateSkill = (req, res, next) => {
  Skill.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((data) => {
    data.update({
      skillname: req.body.skillname,
      skilltype: req.body.skilltype
    })
    .then((result) => {
      res.json(result)
    })
  })
}

let deleteSkill = (req, res, next) => {
  Skill.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((data) => {
    if (data > 0) {
      res.json({
        message: 'Skill has been successfully!'
      })
    } else {
      res.json({
        message: 'ID not found'
      })
    }
    res.json(data)
  })
}

let singleSkill = (req, res, next) => {
  Skill.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((data) => {
    res.json(data)
  })
}

// let skillUsers = (req, res, next) => {
//   Skill.findOne({
//     include: [
//       {
//         model: skill,
//         through: {
//           where: {
//             peopleId: req.params.id
//           }
//         }
//       }
//     ]
//   }).then((data) => {
//     for (var i = 0; i < data.length; i++) {
//       if (data[i].dataValues.id == req.params.id) {
//         res.json(data[i].dataValues)
//       }
//     }
//   })
// }

module.exports = {
  getAllSkill,
  createNewSkill,
  updateSkill,
  deleteSkill,
  singleSkill
}
