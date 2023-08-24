const Recipe = require("../models/Recipe");
const {recipes}=require('../thirdpartyjson')

const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Could not create recipe" });
  }
};

const fetchndCreateRecipe = async (req, res) => {
  console.log("recipes",recipes);
  try {
    let datain=await Recipe.insertMany(recipes)
    res.status(200).json(recipes);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to fetch Music" });
  }
};

const fetchRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve recipes" });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Could not update recipe" });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Could not delete recipe" });
  }
};

const searchRecipe = async (req, res) => {
    const query = req.query.q;
    try {
      const recipes = await Recipe.find({ title: { $regex: query, $options: 'i' } });
      res.json(recipes);
    } catch (error) {
      res.status(500).json({ error: 'Could not search for recipes' });
    }
};

const filterRecipe = async (req, res) => {
    const ingredients = req.query.ingredients; 
    const maxCookingTime = req.query.maxCookingTime; 
    const filterOptions = {};
  
    if (ingredients) {
      filterOptions.ingredients = { $all: ingredients.split(',') };
    }
  
    if (maxCookingTime) {
      filterOptions.cookingTime = { $lte: parseInt(maxCookingTime) };
    }
  
    try {
      const recipes = await Recipe.find(filterOptions);
      res.json(recipes);
    } catch (error) {
      res.status(500).json({ error: 'Could not filter recipes' });
    }
};

module.exports = {
  createRecipe,
  fetchRecipe,
  updateRecipe,
  deleteRecipe,
  searchRecipe,
  filterRecipe,
  fetchndCreateRecipe
};
