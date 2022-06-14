const express = require("express");
//controllers
const { signup } = require("../controllers/parent");
//validators
const { parentValidator, validation } = require("../middlewares/validators");
const parentRouter = express.Router();

//post/register parent
parentRouter.post("/signup/parent", parentValidator, validation, signup);

//exports our router
module.exports = parentRouter;
