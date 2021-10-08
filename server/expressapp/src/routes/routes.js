const {Router} = require('express');
const {getUsers} = require('../controllers/index.controller.js');

const router = Router();

//routes
router.get('/users', getUsers);

module.exports = router;