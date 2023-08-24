const Post = require('../models/Post');
const {blog_post}=require('../thirdpartyjson')

const createPost = async(req, res)=>{
    try {
        const { title, content } = req.body;
        console.log("rrr",req.file,req.body);
        const imageUrl = req.file.location; 
    
        const newPost = new Post({
            title,
            content,
            imageUrl,
            author: req.user.userId,
          });
        await newPost.save();
        res.status(201).json(newPost);
      } catch (error) {
        console.log("eee",error);
        res.status(500).json({ error: 'Failed to create post' });
      }
}


const fetchndCreatePost = async (req, res) => {
  console.log("blog_post",blog_post);
  try {
    let datain=await Post.insertMany(blog_post)
    res.status(200).json(blog_post);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to fetch Music" });
  }
};


const fetchPost = async(req, res)=>{
    try {
        const posts = await Post.find().populate('author', 'email');
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
      }
}

const fetchPostById = async(req, res)=>{
    try {
        const post = await Post.findById(req.params.postId).populate('author', 'email');
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch post' });
      }
}


const updatePost = async(req, res)=>{
    try {
        const { title, content } = req.body;
        const post = await Post.findByIdAndUpdate(
          req.params.postId,
          { title, content },
          { new: true }
        );
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update post' });
      }
}

const deletePost = async(req, res)=>{
    try {
        const post = await Post.findByIdAndDelete(req.params.postId);
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
      }
}


const searchPost =  async (req, res) => {
    console.log("hhh");
    const searchQuery = req.query.title;
    try {
        console.log("seee",searchQuery);
      const posts = await Post.find({ title: { $regex: searchQuery, $options: 'i' } });
      res.status(200).json(posts);
    } catch (error) {
        console.log("ee",error);
      res.status(500).json({ error: 'Failed to search for posts' });
    }
  };


module.exports = {createPost,fetchPost,fetchPostById,updatePost,deletePost,searchPost,fetchndCreatePost}

