const express = require("express");

//controllers
const { signin } = require("../controllers/user");
const { loginValidator } = require("../middlewares/validators");

const userRouter = express.Router();

// userRouter.get("/", getAds);
userRouter.post("/sign-in", signin);

module.exports = userRouter;
