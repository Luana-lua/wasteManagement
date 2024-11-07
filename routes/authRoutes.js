const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth')
const authCont = require('../controllers/authController')

router.post('/login', authCont.login);
router.post('/register', authCont.register);

module.exports = router;