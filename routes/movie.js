const express = require('express');
const authMiddleware = require('../middleware/auth'); 
const { createMovie, fetchMovie, updateMovie, deleteMovie, searchMovie, fetchndCreateMovie } = require('../controller/movieController');
const router = express.Router();


router.post('/',authMiddleware,createMovie);

router.post('/fetch-create',authMiddleware, fetchndCreateMovie);

router.get('/', authMiddleware,fetchMovie);

router.get('/tasks', authMiddleware, searchMovie);

router.put('/:id', authMiddleware, updateMovie);

router.delete('/:id', authMiddleware, deleteMovie);



module.exports = router;
