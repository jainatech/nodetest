const Recipe = require("../models/Recipe");
const {recipes}=require('../thirdpartyjson')

const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    return res.status(201).json(recipe);
  } catch (error) {
    return res.status(500).json({ error: "Could not create recipe" });
  }
};

const fetchndCreateRecipe = async (req, res) => {

  try {
    let datain=await Recipe.insertMany(recipes)
    return res.status(200).json(recipes);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create recipe" });
  }
};

const fetchRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    return res.json(recipes);
  } catch (error) {
    return res.status(500).json({ error: "Could not retrieve recipes" });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(recipe);
  } catch (error) {
    return res.status(500).json({ error: "Could not update recipe" });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    return res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Could not delete recipe" });
  }
};

const searchRecipe = async (req, res) => {
    const query = req.query.q;
    try {
      const recipes = await Recipe.find({ title: { $regex: query, $options: 'i' } });
      return res.json(recipes);
    } catch (error) {
      return  res.status(500).json({ error: 'Could not search for recipes' });
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
      return res.json(recipes);
    } catch (error) {
      return res.status(500).json({ error: 'Could not filter recipes' });
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
