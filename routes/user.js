
const express = require('express');
const { updateUser,deleteUser, getUser, getAllUsers } = require('../controllers/user');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/auth');

const router = express.Router();


router.put('/:id', verifyTokenAndAuthorization ,updateUser);

router.delete('/:id', verifyTokenAndAuthorization, deleteUser);

router.get('/find/:id', verifyTokenAndAdmin, getUser);

router.get('/', verifyTokenAndAdmin, getAllUsers);


module.exports = router;