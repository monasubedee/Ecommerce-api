
const express = require('express');
const { signupUser, signinUser } = require('../controllers/user');

const router = express.Router();


router.post('/register',signupUser);

router.post('/login',signinUser);



module.exports = router;