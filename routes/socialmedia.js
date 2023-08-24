const express = require('express');
const authMiddleware = require('../middleware/auth'); 
const { createSocialMediaPost, fetchSocialMediaPost, updateSocialMediaPost, deleteSocialMediaPost, followuser, unfollowuser } = require('../controller/socialMediaController');
const router = express.Router();

router.post('/',authMiddleware, createSocialMediaPost);

router.get('/', authMiddleware,fetchSocialMediaPost);

router.put('/:id', authMiddleware, updateSocialMediaPost);

router.delete('/:id', authMiddleware, deleteSocialMediaPost);

router.post('/follow', followuser);

router.post('/unfollow', unfollowuser);




module.exports = router;
