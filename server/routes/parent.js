const express = require("express");

//controllers
const { signup, signin } = require("../controllers/user");
//validators
const {
  parentValidator,
  userValidator,
  validation,
} = require("../middlewares/validators");
const parentRouter = express.Router();

// //post/register parent
parentRouter.post(
  "/sign-up/parent",
  userValidator,
  parentValidator,
  validation,
  signup
);

parentRouter.post("/signin", signin);

//exports our router
module.exports = parentRouter;
