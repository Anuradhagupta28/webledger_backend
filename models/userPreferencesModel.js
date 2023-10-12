const mongoose = require("mongoose");

const userPreferencesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  savedRecipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe"
    },
  ],
});

module.exports.userPreferenceModel = mongoose.model("UserPreferences", userPreferencesSchema);
