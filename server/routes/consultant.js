const express = require("express");

//controllers
const { signConsultant, signin } = require("../controllers/consultant");

//validators
const {
  userValidator,
  validation,
  loginValidator,
} = require("../middlewares/validators");

const consultantRouter = express.Router();

//register parent
consultantRouter.post("/sign-up/consultant", signConsultant);

//login
consultantRouter.post("/signin", loginValidator, validation, signin);

//export consultant router
module.exports = consultantRouter;
