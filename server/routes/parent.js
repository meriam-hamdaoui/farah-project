const express = require("express");
const { signParent } = require("../controllers/parent");
//controllers

//validators
const {
  parentValidator,
  userValidator,
  childValidator,
  validation,
  loginValidator,
} = require("../middlewares/validators");
const parentRouter = express.Router();

// //post/register parent
// parentRouter.post(
//   "/register/parent",
//   userValidator,
//   parentValidator,
//   childValidator,
//   validation,
//   signup
// );

parentRouter.post("/sign-up/parent", signParent);

// parentRouter.post("/signin", loginValidator, validation, signin);

//exports our router
module.exports = parentRouter;
