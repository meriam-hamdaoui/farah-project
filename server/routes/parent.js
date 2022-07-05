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
parentRouter.get("parent/profil", isAuth, getProfile);

//puts
parentRouter.put("parent/:id", updateProfile);

//children routes
parentRouter.post("parent/profil/add-children", childValidator, addChildren);
parentRouter.get("parent/profil/children", getChildren);
parentRouter.get("parent/profil/children/:id", getChild);
parentRouter.put("parent/profil/children/:id", childValidator, updateChild);
parentRouter.delete("parent/profil/children/:id", deleteChild);

//exports our router
module.exports = parentRouter;
