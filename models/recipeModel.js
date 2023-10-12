const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
}
});

module.exports.recipeModel = mongoose.model('Recipe', recipeSchema);
