const express = require('express');

// Controller & Logics Location
const recipeController = require('../controllers/recipeController');

// Create an instance of an Express Router
const recipeRouter = express.Router();

// Create a new user
recipeRouter.get('/recipes', recipeController.searchRecipes);

module.exports = recipeRouter;