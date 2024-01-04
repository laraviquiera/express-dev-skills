const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

//GET /skills
router.get('/', skillsCtrl.index);
//GET /skills/new
router.get('/new', skillsCtrl.new);
//GET /skills/:id
router.get('/:id', skillsCtrl.show);
//GET /skills/new


module.exports = router;
