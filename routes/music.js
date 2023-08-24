const express = require('express');
const authMiddleware = require('../middleware/auth'); 
const{ createMusic, fetchMusic, fetchMusicById,updateMusic,deleteMusic, serachMusic } = require('../controller/musicController');
const router = express.Router();

router.post('/',authMiddleware, createMusic);

router.get('/', authMiddleware,fetchMusic);

router.get('/:postId', authMiddleware, fetchMusicById);

router.put('/:postId', authMiddleware, updateMusic);

router.delete('/:postId', authMiddleware, deleteMusic);

router.delete('/search',authMiddleware, serachMusic);


module.exports = router;
