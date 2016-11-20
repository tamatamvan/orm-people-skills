var express = require('express');
var router = express.Router();
var peopleController = require('../controllers/peopleController')
/* GET users listing. */
router.get('/', peopleController.getAllPeople);
router.post('/', peopleController.createNewPerson);
router.put('/:id', peopleController.updatePerson);
router.delete('/:id', peopleController.killPerson);
router.get('/:id', peopleController.seeProfile);
router.post('/skill/:id', peopleController.giveSkill);

module.exports = router;
