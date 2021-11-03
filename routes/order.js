const express = require('express');
const {createOrder,updateOrder,deleteOrder,getUserOrders,getAllUserOrders  } = require('../controllers/order');
const { verifyTokenAndAdmin, verifyTokenAndAuthorization, verifyToken } = require('../middlewares/auth');

const router = express.Router();


router.post('/',verifyToken, createOrder);

router.put('/:id',verifyTokenAndAdmin, updateOrder);

router.delete('/:id',verifyTokenAndAdmin,deleteOrder);

router.get('/find/:id', verifyTokenAndAuthorization,getUserOrders);

router.get('/', verifyTokenAndAdmin, getAllUserOrders);


module.exports = router;