const express = require('express');
const authMiddleware = require('../middleware/auth'); 
const { createProduct, fetchProduct, updateProduct, deleteProduct, serachProduct, filterProduct, fetchndCreateProduct } = require('../controller/ecommerceController');
const { fetchPostById } = require('../controller/postController');
const router = express.Router();

router.post('/',authMiddleware, createProduct);

router.post('/create',authMiddleware ,fetchndCreateProduct);

router.get('/',authMiddleware,fetchProduct);

router.get('/search',authMiddleware, serachProduct);

router.get('/filter',authMiddleware, filterProduct);

router.get('/:productId', authMiddleware, fetchPostById);

router.put('/:productId', authMiddleware, updateProduct);

router.delete('/:productId', authMiddleware, deleteProduct);




module.exports = router;
