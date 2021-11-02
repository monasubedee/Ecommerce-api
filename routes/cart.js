const express = require('express');
const { createCart,getUserCart, updateCart, deleteCart, getAllUserCarts } = require('../controllers/cart');
const { verifyTokenAndAdmin, verifyTokenAndAuthorization, verifyToken } = require('../middlewares/auth');

const router = express.Router();


router.post('/',verifyToken, createCart);

router.put('/:id',verifyTokenAndAuthorization, updateCart);

router.delete('/:id',verifyTokenAndAuthorization,deleteCart);

router.get('/find/:id', verifyTokenAndAdmin,getUserCart);

router.get('/', verifyTokenAndAdmin, getAllUserCarts);


module.exports = router;