const express = require('express');
const authMiddleware = require('../middleware/auth'); 
const { createRecipe, fetchRecipe, updateRecipe, deleteRecipe, filterRecipe, searchRecipe } = require('../controller/recipeController');
const router = express.Router();

router.post('/',authMiddleware,createRecipe);

router.get('/', authMiddleware,fetchRecipe);

router.put('/:id', authMiddleware, updateRecipe);

router.delete('/:id', authMiddleware, deleteRecipe);

router.get('/search', authMiddleware, searchRecipe);

router.get('/filter', authMiddleware, filterRecipe);


module.exports = router;
