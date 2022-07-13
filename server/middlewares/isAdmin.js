//we need the token to validate the authentication
let jwt = require("jsonwebtoken");
//as well as the schema models
const User = require("../models/user");

exports.isAdmin = async (req, res, next) => {
  const token = req.header("authenticate");
  // console.log("token isAdmin =>", token);
  try {
    let matched = jwt.verify(token, process.env.secretOrKey);
    // console.log("matched isAdmin =>", matched);
    if (!matched)
      return res.status(400).send({ msg: "you are not authorized to login" });

    const user = await User.findById(matched.id);
    // console.log("is admin ??=>", user);
    if (user.role === 0 && user.category === "admin") {
      // console.log(`welcome ${user.email}`);
      req.user = user;
    }
    if (user.role !== 0 && user.category !== "admin") {
      return res
        .status(400)
        .send({ msg: "path are not allowad for your authentication" });
    }
    next();
  } catch (errors) {
    console.error("you are not the admin");
    res.status(500).send({ msg: "you are not the admin", error: errors });
  }
};
