const express = require("express");

//controllers
const { signup, signin } = require("../controllers/user");

//validators
const {
  userValidator,
  consultantValidator,
  validation,
  loginValidator,
} = require("../middlewares/validators");

//consultant router
const consultantRouter = express.Router();

//register parent
consultantRouter.post(
  "/sign-up/consultant",
  userValidator,
  consultantValidator,
  validation,
  signup
);

//login
consultantRouter.post("/signin", loginValidator, signin);

//export consultant router
module.exports = consultantRouter;
