const { Router } = require("express");

const adminRouter = Router();

//controllers
const { signin } = require("../controllers/user");

//middlewares
const { isAdmin } = require("../middlewares/isAdmin");
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
} = require("../controllers/admin");

// adminRouter.post("/sign-in", loginValidator, signin);
adminRouter.get("/dashboard", isAdmin, (req, res) => {
  res.send(req.user);
});
//update profile
adminRouter.put("/dashboard/profil", isAdmin, updateAdmin);

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

module.exports = adminRouter;
