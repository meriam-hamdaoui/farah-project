const express = require("express");

//controllers
const { signup, getProfile } = require("../controllers/user");

const {
  updateConsultant,
  addExperience,
  deleteExperience,
  addInternship,
  deleteInternship,
} = require("../controllers/consultant");

//validators
const {
  userValidator,
  consultantValidator,
  validation,
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

//gets
consultantRouter.get("/consultant/profil", isAuth, getProfile);

//puts
consultantRouter.put("/consultant/profil/:id", isAuth, updateConsultant);

//experiences
consultantRouter.post("/consultant/profil/experiences", isAuth, addExperience);
consultantRouter.delete(
  "/consultant/profil/experiences/:id",
  isAuth,
  deleteExperience
);

//internships
consultantRouter.post("/consultant/profil/internships", isAuth, addInternship);
consultantRouter.delete(
  "/consultant/profil/internships/:id",
  isAuth,
  deleteInternship
);

//export consultant router
module.exports = consultantRouter;
