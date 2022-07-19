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
    //if there is no token
    if (!token) return res.status(401).send({ msg: "not authenticate" });
    //else : we need to verify between the token registred inside our DB and the one from the header
    const dechiffrage = jwt.verify(token, process.env.secretOrKey);
    //if our tokens did not match
    if (!dechiffrage) return res.status(401).send({ msg: "sign up first" });
    // console.log("dechiffrage =>", dechiffrage);

    //if our token matchs we search for the user using his id
    const { id } = dechiffrage;
    const user = await User.findById(id);
    // console.log("user isAuth =>", user);
    req.user = user;

    // res.send(req.user);

    next();
  } catch (errors) {
    console.error(`isAuth ERROR => ${errors}`);
    res.status(500).send({ msg: "authentication error", error: errors });
  }
};
