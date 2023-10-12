const { Router } = require("express");
require("dotenv").config();
const axios = require("axios");

const findFoodRoute = Router();

findFoodRoute.get("/recipes/:id/information", async (req, res) => {
    const id = req.params.id;
  
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`
      )
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => console.log(err));
  });

  module.exports = findFoodRoute;