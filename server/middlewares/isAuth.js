//we need the token to validate the authentication
let jwt = require("jsonwebtoken");
//as well as the schema models
const User = require("../models/user");
const Parent = require("../models/parent");
const Consultant = require("../models/consultant");

//isAuth is a middleware to export

exports.isAuth = async (req, res, next) => {
  /** in this middleware we're gonna use the header property of our req
   *  which recupers our token */
  const token = req.header("authenticate");
  // console.log("token isAuth =>", token);
  try {
    //we need to verify between the token registred inside our DB and the one from the header
    let matched = jwt.verify(token, process.env.secretOrKey);
    // console.log("matched isAuth =>", matched);
    //if our tokens did not match
    if (!matched)
      return res.status(400).send({ msg: "you are not authorized to login" });
    //if our token matchs we search for the user using his _id
    const user = await User.findById(matched.id);
    //after that we give it back to the req
    req.user = user;

    next();
  } catch (errors) {
    console.error(`isAuth ERROR => ${errors}`);
    res.status(500).send({ msg: "authentication error", error: errors });
  }
};
