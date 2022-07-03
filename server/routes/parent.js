const express = require("express");

//controllers
const { signup, signin } = require("../controllers/user");
const {
  getProfile,
  updateProfile,
  addChildren,
  getChildren,
  getChild,
  updateChild,
  deleteChild,
} = require("../controllers/parent");

//middlewares
const {
  parentValidator,
  userValidator,
  loginValidator,
  childValidator,
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
parentRouter.get("/profile", isAuth, getProfile);

//puts
parentRouter.put("/:id", updateProfile);

//children routes
parentRouter.post("/profile/add-children", childValidator, addChildren);
parentRouter.get("/profile/children", getChildren);
parentRouter.get("/profile/children/:id", getChild);
parentRouter.put("/profile/children/:id", childValidator, updateChild);
parentRouter.delete("/profile/children/:id", deleteChild);

//exports our router
module.exports = parentRouter;
