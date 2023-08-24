const Movie = require("../models/Movie");
const movies=require('../thirdpartyjson')

const createMovie = async (req, res) => {
    try {
        const { title, director, genre, year } = req.body;
        const movie = new Movie({ title, director, genre, year });
        const savedMovie = await movie.save();
        res.status(201).json(savedMovie);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};

const fetchndCreateMovie = async (req, res) => {
  console.log("movie",movies);
  try {
    let datain=await Movie.insertMany(movie)
    res.status(200).json(movie);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

const fetchMovie = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
      } catch (error) {
        res.status(500).json({ error: error.message });
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
    
        res.json(updatedMovie);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  };

  const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMovie = await Movie.findByIdAndRemove(id);
    
        if (!deletedMovie) {
          return res.status(404).json({ message: 'Movie not found' });
        }
    
        res.json({ message: 'Movie deleted' });
      } catch (error) {
        res.status(500).json({ error: error.message });
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
            res.json(searchResults);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
  };

module.exports = { createMovie, fetchMovie,updateMovie,deleteMovie,searchMovie,fetchndCreateMovie };