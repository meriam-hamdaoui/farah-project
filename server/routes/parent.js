const express = require("express");

//controllers
const { signup, signin } = require("../controllers/user");
//middlewares
const {
  parentValidator,
  userValidator,
  loginValidator,
  validation,
} = require("../middlewares/validators");
const { isAuth } = require("../middlewares/isAuth");

//creater a parent router
const parentRouter = express.Router();

//posts
parentRouter.post(
  "/sign-up/parent",
  userValidator,
  parentValidator,
  validation,
  signup
);
parentRouter.post("/signin", loginValidator, signin);

//gets
parentRouter.get("/profile", isAuth, (req, res) => {
  res.send(req.user);
});

//exports our router
module.exports = parentRouter;
