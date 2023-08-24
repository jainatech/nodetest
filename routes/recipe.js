const express = require('express');
const authMiddleware = require('../middleware/auth'); 
const { createRecipe, fetchRecipe, updateRecipe, deleteRecipe, filterRecipe, searchRecipe, fetchndCreateRecipe } = require('../controller/recipeController');
const router = express.Router();

router.post('/',authMiddleware,createRecipe);
router.post('/fetch-create',authMiddleware,fetchndCreateRecipe);

router.get('/', authMiddleware,fetchRecipe);

router.put('/:id', authMiddleware, updateRecipe);

router.delete('/:id', authMiddleware, deleteRecipe);

router.get('/search', authMiddleware, searchRecipe);

router.get('/filter', authMiddleware, filterRecipe);


module.exports = router;
