const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    // followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    followers: String,
  });

module.exports = mongoose.model('SocialMedia', socialMediaSchema);
