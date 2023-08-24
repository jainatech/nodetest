const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    trackName: { type: String, },
    artist:{ type: String, },
    album: { type: String, },
  });

module.exports = mongoose.model('Music', musicSchema);
