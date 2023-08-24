const express = require('express');
const authMiddleware = require('../middleware/auth'); 
const { createProperty, fetchProperty, updateProperty, deleteProperty, searchProperty, filterProperty } = require('../controller/realEstateController');
const router = express.Router();

router.post('/',authMiddleware,createProperty);

router.get('/', authMiddleware,fetchProperty);

router.put('/:id', authMiddleware, updateProperty);

router.delete('/:id', authMiddleware, deleteProperty);

router.get('/search', authMiddleware, searchProperty);

router.get('/filter', authMiddleware, filterProperty);


module.exports = router;
