const express = require('express');

// Controller & Logics Location
const userController = require('../controllers/userController');

// Create an instance of an Express Router
const userRouter = express.Router();

// Create a new user
userRouter.post('/register', userController.createUser);

// Log in user
userRouter.post('/login', userController.loginUser);

module.exports = userRouter;