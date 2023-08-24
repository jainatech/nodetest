const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    genre: String,
    year: Number,
  });
  const Movie = mongoose.model('Movie', movieSchema);

  module.exports = Movie;