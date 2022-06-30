const { Router } = require("express");

//middlewares
const {
  userValidator,
  parentValidator,
  consultantValidator,
  validation,
} = require("../middlewares/validators");

//controlers
const { signup, signin } = require("../controllers/user");

const userRouter = Router();

//post
userRouter.post("/sign-up", userValidator, validation, signup);

//get
userRouter.post("/sign-in", signin);

module.exports = userRouter;
