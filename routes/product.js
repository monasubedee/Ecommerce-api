const express = require('express');
const { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts } = require('../controllers/product');
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('../middlewares/auth');

const router = express.Router();



router.post('/', verifyTokenAndAdmin, createProduct);

router.put('/:id', verifyTokenAndAdmin, updateProduct);

router.delete('/:id', verifyTokenAndAdmin, deleteProduct);

router.get('/find/:id', verifyTokenAndAuthorization, getProduct);

router.get('/', verifyTokenAndAuthorization, getAllProducts);


module.exports = router;