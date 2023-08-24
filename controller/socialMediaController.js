const SocialMedia = require("../models/SocialMedia");

const createSocialMediaPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const newPost = new SocialMedia({ title, content, author });
        const savedPost = await newPost.save();
        res.json(savedPost);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  };

  const fetchSocialMediaPost = async (req, res) => {    
    try {
        const posts = await SocialMedia.find();
        res.json(posts);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  };

  const updateSocialMediaPost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, author } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(id, { title, content, author }, { new: true });
        res.json(updatedPost);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  };
  const deleteSocialMediaPost = async (req, res) => {
    try {
        const { id } = req.params;
        await Post.findByIdAndDelete(id);
        res.json({ message: 'Post deleted' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  };


  // Follow a user
  const followuser = async (req, res) => {
    
  try {
    const { userId } = req.params;
    const { followerId } = req.body;

    const user = await SocialMedia.findByIdAndUpdate(
      userId,
      { $addToSet: { followers: followerId } },
      { new: true }
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
;

// Unfollow a user
  const unfollowuser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { followerId } = req.body;

    const user = await SocialMedia.findByIdAndUpdate(
      userId,
      { $pull: { followers: followerId } },
      { new: true }
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  };

  module.exports = {createSocialMediaPost,fetchSocialMediaPost,updateSocialMediaPost,deleteSocialMediaPost,followuser,unfollowuser}