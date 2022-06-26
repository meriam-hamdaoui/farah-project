const express = require("express");
//controllers
const { signup, signin } = require("../controllers/parent");
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

parentRouter.post("/signin", signin);

//exports our router
module.exports = parentRouter;
