const express = require('express');
const authMiddleware = require('../middleware/auth'); 
const{ createMusic, fetchMusic, fetchMusicById,updateMusic,deleteMusic, serachMusic, fetchndCreateMusic } = require('../controller/musicController');
const router = express.Router();

router.post('/',authMiddleware, createMusic);

router.post('/fetch-create',authMiddleware, fetchndCreateMusic);

router.get('/search',authMiddleware, serachMusic);

router.get('/:postId', authMiddleware, fetchMusicById);

router.put('/:postId', authMiddleware, updateMusic);

router.delete('/:postId', authMiddleware, deleteMusic);



module.exports = router;
