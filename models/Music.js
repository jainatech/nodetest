const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    trackName: { type: String, },
    artist:{ type: String, },
    album: { type: String, },
  });

  const Music = mongoose.model('Music', musicSchema);

  module.exports = Music;
