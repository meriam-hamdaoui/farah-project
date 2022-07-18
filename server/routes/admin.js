const { Router } = require("express");
const adminRouter = Router();

//middlewares
const { isAdmin } = require("../middlewares/isAdmin");
const { adValidator } = require("../middlewares/validators");

//controllers
const { signin } = require("../controllers/user");
const {
  updateAdmin,
  displayUsers,
  displayParents,
  displayConsultants,
  displayChildren,
  userById,
  parentById,
  consultantById,
  childById,
  deleteUser,
  deleteParent,
  deleteConsultant,
  deleteChild,
  createAd,
  updateAd,
  deleteAd,
  getAds,
  getAd,
  getAdmin,
} = require("../controllers/admin");

// adminRouter.post("/sign-in", loginValidator, signin);
adminRouter.get("/dashboard", getAdmin);
//update profile
adminRouter.put("/dashboard/admin", updateAdmin);

//the gets
adminRouter.get("/dashboard/users", displayUsers);
adminRouter.get("/dashboard/parents", displayParents);
adminRouter.get("/dashboard/consultants", displayConsultants);
adminRouter.get("/dashboard/children", displayChildren);

//get by id
adminRouter.get("/dashboard/users/:id", userById);
adminRouter.get("/dashboard/parents/:id", parentById);
adminRouter.get("/dashboard/consultants/:id", consultantById);
adminRouter.get("/dashboard/children/:id", childById);

//delete
adminRouter.delete("/dashboard/users/:id", deleteUser);
adminRouter.delete("/dashboard/parents/:id", deleteParent);
adminRouter.delete("/dashboard/consultants/:id", deleteConsultant);
adminRouter.delete("/dashboard/children/:id", deleteChild);

//ads
adminRouter.post("/dashboard/ads/create", adValidator, createAd);
// adminRouter.get("/dashboard/ads", isAdmin, getAds);
adminRouter.get("/dashboard/ads/:id", getAd);
adminRouter.put("/dashboard/ads/:id", adValidator, updateAd);
adminRouter.delete("/dashboard/ads/:id", deleteAd);

module.exports = adminRouter;
