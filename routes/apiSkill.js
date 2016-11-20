var express = require('express');
var router = express.Router();
var skillController = require('../controllers/skillController')
/* GET users listing. */
router.get('/', skillController.getAllSkill);
router.post('/', skillController.createNewSkill);
router.put('/:id', skillController.updateSkill);
router.delete('/:id', skillController.deleteSkill);
router.get('/:id', skillController.singleSkill);

module.exports = router;
