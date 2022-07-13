const express = require("express");

//controllers
const { signup, getProfile } = require("../controllers/user");
const {
  updateParent,
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
// parentRouter.post("/signin", loginValidator, signin);

//gets
parentRouter.get("/parent/profil", isAuth, getProfile);

//puts
parentRouter.put("/parent/profil/:id", isAuth, updateParent);

//children routes
parentRouter.post(
  "/parent/profil/add-child",
  isAuth,
  childValidator,
  addChildren
);
parentRouter.get("/parent/profil/children", isAuth, getChildren);
parentRouter.get("/parent/profil/children/:id", isAuth, getChild);
parentRouter.put(
  "/parent/profil/children/:id",
  isAuth,
  childValidator,
  updateChild
);
parentRouter.delete("/parent/profil/children/:id", isAuth, deleteChild);

//exports our router
module.exports = parentRouter;
