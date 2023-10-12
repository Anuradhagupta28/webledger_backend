const express = require("express");
const cors = require("cors");
const colors = require("colors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// --------------->>>>>>>> Locations <<<<<<<<-------------------
// Configs Location
const { connectToDatabase } = require("./configs/db");

// Routers Location
const userRouter = require("./routes/userRoute");
const recipeRouter = require("./routes/recipeRoute");
const userPreferenceRouter = require("./routes/userPreferencesRoute");
const findFoodRoute = require("./routes/findFoodRoute.js");
// Middleware Location
const { authenticateToken } = require("./middlewares/auth_middleware");

// Middlewares
app.use(express.json());
app.use(cors());

// Home route
app.get("/", (req, res) => {
  res.send(`<h1 style="color: blue; text-align:center">Welcome to Food Api Backend</h1>`);
});

// Routes (API Endpoints)
app.use("/api/auth", userRouter);
app.use("/api/search",recipeRouter);
app.use("/search", findFoodRoute);
app.use(authenticateToken);
app.use('/api/userPreference',userPreferenceRouter);

// Server Listening
(async () => {
    try {
      await connectToDatabase();

      // Start Server
      app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`.blue);
      });
    } catch (error) {
      console.error(colors.red(`Database connection error:`, error.message));
    }
  }
)();
