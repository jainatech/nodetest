const express = require('express');
const authMiddleware = require('../middleware/auth'); 
const { createProduct, fetchProduct, updateProduct, deleteProduct, serachProduct, filterProduct, fetchndCreateProduct } = require('../controller/ecommerceController');
const { fetchPostById } = require('../controller/postController');
const router = express.Router();

router.post('/',authMiddleware, createProduct);

router.post('/create', fetchndCreateProduct);

router.get('/',fetchProduct);

router.get('/:productId', authMiddleware, fetchPostById);

router.put('/:productId', authMiddleware, updateProduct);

router.delete('/:productId', authMiddleware, deleteProduct);

router.delete('/search',authMiddleware, serachProduct);

router.get('/filter',authMiddleware, filterProduct);


module.exports = router;
