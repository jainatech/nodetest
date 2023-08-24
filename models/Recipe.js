const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [{ type: String }],
  instructions: { type: String },
});

module.exports = mongoose.model('Recipe', recipeSchema);
