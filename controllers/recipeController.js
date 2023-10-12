const axios = require("axios");
const colors = require("colors");

exports.searchRecipes = async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch`,
      {
        params: {
          apiKey: process.env.SPOONACULAR_API_KEY,
          query,
        },
      }
    );

    const recipes = response.data.results;

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Recipes Fetched successfully by user Search",
      data: recipes,
    });
  } catch (error) {
    console.error(colors.red("Error: ", error.message));
    res.status(500).json({
      status: 500,
      success: false,
      error: error.message,
      message: "Recipe Fetching failed",
    });
  }
};
