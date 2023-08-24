const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, },
  content: { type: String },
  category : { type: String },
  author: { type: String},
  imageUrl:{type:String},
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('News', newsSchema);
