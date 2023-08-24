const express = require('express');
const { fetchNews, createNews, updateNews, deleteNews, filterNews, serachNews } = require('../controller/newsController');
const authMiddleware = require('../middleware/auth'); 
const router = express.Router();


router.post('/create-news', authMiddleware,fetchNews);
router.post('/', authMiddleware, createNews);
router.put('/:newsId',authMiddleware, updateNews);
router.delete('/:newsId', authMiddleware, deleteNews);
router.get('/category/:category',authMiddleware, filterNews);
router.get('/search', authMiddleware, serachNews);





module.exports = router;
