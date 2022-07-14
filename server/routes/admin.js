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
} = require("../controllers/admin");

// adminRouter.post("/sign-in", loginValidator, signin);
adminRouter.get("/dashboard", isAdmin, (req, res) => {
  res.send(req.user);
});
//update profile
adminRouter.put("/dashboard/admin", isAdmin, updateAdmin);

//the gets
adminRouter.get("/dashboard/users", isAdmin, displayUsers);
adminRouter.get("/dashboard/parents", isAdmin, displayParents);
adminRouter.get("/dashboard/consultants", isAdmin, displayConsultants);
adminRouter.get("/dashboard/children", isAdmin, displayChildren);

//get by id
adminRouter.get("/dashboard/users/:id", isAdmin, userById);
adminRouter.get("/dashboard/parents/:id", isAdmin, parentById);
adminRouter.get("/dashboard/consultants/:id", isAdmin, consultantById);
adminRouter.get("/dashboard/children/:id", isAdmin, childById);

//delete
adminRouter.delete("/dashboard/users/:id", isAdmin, deleteUser);
adminRouter.delete("/dashboard/parents/:id", isAdmin, deleteParent);
adminRouter.delete("/dashboard/consultants/:id", isAdmin, deleteConsultant);
adminRouter.delete("/dashboard/children/:id", isAdmin, deleteChild);

//ads
adminRouter.post("/dashboard/ads/create", isAdmin, adValidator, createAd);
adminRouter.get("/dashboard/ads", isAdmin, getAds);
adminRouter.get("/dashboard/ads/:id", isAdmin, getAd);
adminRouter.put("/dashboard/ads/:id", isAdmin, adValidator, updateAd);
adminRouter.delete("/dashboard/ads/:id", isAdmin, deleteAd);

module.exports = adminRouter;
