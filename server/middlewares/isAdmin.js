//we need the token to validate the authentication
let jwt = require("jsonwebtoken");
//as well as the schema models
const User = require("../models/user");

exports.isAdmin = async (req, res, next) => {
  const token = req.header("authenticate");
  const role = req.header("role");
  // console.log("token isAdmin =>", token);
  try {
    let decoder = jwt.verify(token, process.env.secretOrKey);
    // console.log("matched isAdmin =>", decoder);
    if (!decoder)
      return res.status(400).send({ msg: "you are not authorized to login" });

    const admin = await User.findOne({
      $and: [{ _id: decoder.id }, { role: 0 }],
    });
    // console.log("is admin ??=>", admin);

    req.user = admin;

    // console.log("req.user =>", req.user);
    // if (user.role !== role && user.category !== "admin") {
    //   return res
    //     .status(400)
    //     .send({ msg: "path are not allowad for your authentication" });
    // }

    next();
  } catch (errors) {
    console.error("you are not the admin");
    res.status(500).send({ msg: "you are not the admin", error: errors });
  }
};
