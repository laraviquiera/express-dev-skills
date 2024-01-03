const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/skills');


router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;
