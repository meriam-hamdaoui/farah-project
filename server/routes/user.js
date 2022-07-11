const express = require("express");

//controllers
const { signin } = require("../controllers/user");
const { loginValidator } = require("../middlewares/validators");

const userRouter = express.Router();

userRouter.post("/sign-in", loginValidator, signin);

module.exports = userRouter;
