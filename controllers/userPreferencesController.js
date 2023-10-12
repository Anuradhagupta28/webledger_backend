const colors = require("colors");
const { userPreferenceModel } = require("../models/userPreferencesModel");

exports.getUserPreferences = async (req, res) => {
  try {
    const { userId } = req.params;
    const userPreferences = await userPreferenceModel
      .findOne({ userId })
      .populate("savedRecipes");

    return res.status(200).json({
      status: 200,
      success: true,
      message: "User preferences fetched successfully",
      data: userPreferences,
    });
  } catch (error) {
    console.error(colors.red("Error:", error.message));
    return res.status(500).json({
      status: 500,
      success: false,
      error: error.message,
      message: "Error in getUserPreferences",
    });
  }
};

exports.saveRecipeToUserPreferences = async (req, res) => {
  try {
    const { userId, recipeId } = req.body;
    const userPreferences = await userPreferenceModel.findOne({ userId });

    if (!userPreferences) {
      const newUserPreferences = new userPreferenceModel({
        userId,
        savedRecipes: [recipeId],
      });
      await newUserPreferences.save();

      return res.status(201).json({
        status: 201,
        message: "Recipe saved to user preferences successfully",
      });
    } else {
      if (!userPreferences.savedRecipes.includes(recipeId)) {
        userPreferences.savedRecipes.push(recipeId);
        await userPreferences.save();

        return res.status(200).json({
          status: 200,
          message: "Recipe saved to user preferences successfully",
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "Recipe already saved to user preferences",
        });
      }
    }
  } catch (error) {
    console.error(colors.red("Error:", error.message));
    return res.status(500).json({
      status: 500,
      success: false,
      error: error.message,
      message: "Error in saveRecipeToUserPreferences",
    });
  }
};
