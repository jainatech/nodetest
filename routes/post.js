const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const authMiddleware = require('../middleware/auth'); 
const {createPost,fetchPost,fetchPostById,updatePost,deletePost,searchPost} = require("../controller/postController")
const router = express.Router();

const s3 = new aws.S3();


const upload = multer({
    storage: multerS3({
      s3,
      bucket: 'qrioustech-demo-bucket',
      acl: 'public-read',
      metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname });
      },
      key: (req, file, cb) => {
        cb(null, Date.now().toString()); 
      },
    }),
  });

// Create a new blog post
router.post('/', authMiddleware, upload.single('image'), createPost);

// Get all blog posts
router.get('/', fetchPost);

router.get('/search', authMiddleware, searchPost);
// Get a specific blog post by ID
router.get('/:postId', fetchPostById);

// Update a specific blog post by ID
router.put('/:postId', authMiddleware, updatePost);

// Delete a specific blog post by ID
router.delete('/:postId', authMiddleware, deletePost);

//Search a blog post


module.exports = router;
