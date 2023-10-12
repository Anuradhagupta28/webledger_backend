const express = require('express');
const userPreferenceRouter = express.Router();

const userPreferenceController = require('../controllers/userPreferencesController');

// Route to get user preferences by userId
userPreferenceRouter.get('/:userId', userPreferenceController.getUserPreferences);

// Route to save a recipe to user preferences
userPreferenceRouter.post('/saveRecipe', userPreferenceController.saveRecipeToUserPreferences);

module.exports = userPreferenceRouter;
