const express = require("express");

//controllers
const { signup, signin } = require("../controllers/user");

const { getProfile, updateProfile } = require("../controllers/consultant");

//validators
const {
  userValidator,
  consultantValidator,
  validation,
  loginValidator,
} = require("../middlewares/validators");
const { isAuth } = require("../middlewares/isAuth");

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
// consultantRouter.post("/signin", loginValidator, signin);

//gets
consultantRouter.get("/consultant/profil", isAuth, getProfile);

//puts
consultantRouter.put("/consultant/profil/:id", isAuth, updateProfile);

//export consultant router
module.exports = consultantRouter;
