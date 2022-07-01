const { Router } = require("express");

const adminRouter = Router();

//controllers
const { signin } = require("../controllers/user");

//middlewares
const { isAdmin } = require("../middlewares/isAdmin");
const { loginValidator } = require("../middlewares/validators");

adminRouter.post("/sign-in", loginValidator, signin);
adminRouter.get("/dashboard", isAdmin, (req, res) => {
  res.send(req.user);
});

module.exports = adminRouter;
