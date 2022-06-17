const express = require("express");
//controllers
const { signup } = require("../controllers/parent");
//validators
const {
  parentValidator,
  userValidator,
  childValidator,
  validation,
} = require("../middlewares/validators");
const parentRouter = express.Router();

//post/register parent
parentRouter.post(
  "/register/parent",
  userValidator,
  parentValidator,
  childValidator,
  validation,
  signup
);

//exports our router
module.exports = parentRouter;
