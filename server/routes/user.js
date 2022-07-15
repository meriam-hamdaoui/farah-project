const express = require("express");

//controllers
const { signin } = require("../controllers/user");
const { loginValidator } = require("../middlewares/validators");
const { getAds } = require("../controllers/admin");

const userRouter = express.Router();

userRouter.post("/", getAds);
userRouter.post("/sign-in", loginValidator, signin);

module.exports = userRouter;
