const Movie = require("../models/Movie");
const {movies}=require('../thirdpartyjson')

const createMovie = async (req, res) => {
    try {
        const { title, director, genre, year } = req.body;
        const movie = new Movie({ title, director, genre, year });
        const savedMovie = await movie.save();
        return res.status(201).json(savedMovie);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
};

const fetchndCreateMovie = async (req, res) => {
  try {
    let datain=await Movie.insertMany(movies)
    return res.status(200).json(datain);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create movie" });
  }
};

const fetchMovie = async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.json(movies);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
  };

  const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, director, genre, year } = req.body;
    
        const updatedMovie = await Movie.findByIdAndUpdate(
          id,
          { title, director, genre, year },
          { new: true }
        );
    
        if (!updatedMovie) {
          return res.status(404).json({ message: 'Movie not found' });
        }
    
        return res.json(updatedMovie);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
  };

  const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMovie = await Movie.findByIdAndRemove(id);
    
        if (!deletedMovie) {
          return res.status(404).json({ message: 'Movie not found' });
        }
    
        return res.json({ message: 'Movie deleted' });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
  };


  const searchMovie = async (req, res) => {
        try {
            const { queryType, queryValue } = req.query;
        
            let searchQuery = {};
        
            if (queryType === 'title') {
              searchQuery = { title: { $regex: queryValue, $options: 'i' } };
            } else if (queryType === 'genre') {
              searchQuery = { genre: { $regex: queryValue, $options: 'i' } };
            } else if (queryType === 'director') {
              searchQuery = { director: { $regex: queryValue, $options: 'i' } };
            } else {
              return res.status(400).json({ message: 'Invalid query type' });
            }
        
            const searchResults = await Movie.find(searchQuery);
            return res.json(searchResults);
          } catch (error) {
            return res.status(500).json({ error: error.message });
          }
  };

module.exports = { createMovie, fetchMovie,updateMovie,deleteMovie,searchMovie,fetchndCreateMovie };