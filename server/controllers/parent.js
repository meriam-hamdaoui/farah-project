//require the parent/child schema for registration
const Parent = require("../models/parent");
const { Child } = require("../models/child");
const { User } = require("../models/user");

//third-party models
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

/** registration conroller */
exports.signParent = async (req, res) => {
  const { user, ...rest } = req.body;
  // console.log("user => ", user);
  // console.log("child => ", child);
  // console.log("rest => ", rest);

  try {
    const { email, password, passwordConfirm } = user;
    // console.log("email => ", email);
    //search for existant user with the entred email
    const exists = await User.findOne({ email: email });
    // console.log("exists => ", exists);

    //1. if exists
    if (exists) return res.status(403).send("this email already exists");

    //2. if not
    const newUser = await new User(user);

    const newParent = await new Parent({
      user: newUser._id,
      ...rest,
    });
    // console.log("newUser =>", newUser);
    // console.log("newParent =>", newParent);

    /**** hashing the passwords before saving the parent (npm i bcryptjs) */
    //generate a salt round for our hash
    const saltRound = 8;
    const salt = bcrypt.genSaltSync(saltRound);
    //hash the password
    const hash = bcrypt.hashSync(newUser.password, salt);
    // console.log("salt =>", salt);
    // console.log("hash =>", hash);
    //we add the hash to the user password
    newUser.password = hash;
    newUser.passwordConfirm = hash;

    //give the parent a role
    newUser.role = 2;

    const payloadParent = { id: newParent.user._id };
    let token = jwt.sign(payloadParent, process.env.secretOrKey);

    if (newUser && newParent) {
      if ((await newParent.save()) && (await newUser.save())) {
        return res.status(200).send({
          msg: `welcome ${newUser.firstName} ${newUser.lastName}`,
          newUser,
          newParent,
          token,
        });
      }
    }
  } catch (error) {
    console.error(`signup error => ${error}`);
    return res.status(500).send({ msg: "signup error", error });
  }
};

/** signin parent */
exports.signin = async (req, res) => {
  //distracturing
  const { email, password } = req.body;
  try {
    //check first for the existance of our user
    const exists = await User.findOne({ email: email });
    console.log("exists => ", exists);
    if (!exists) {
      return res
        .status(400)
        .send({ msg: "you don't have an account, sign up first" });
    }

    //verify for the match fo password using the bcrypt
    // const match = await bcrypt.compare(password, exists.user.password);
    // console.log("match =>", match);
    // if (!match) {
    // return res.status(400).send({ msg: "you have the rong password" });
    // }

    // const payloadParent = { id: exists.user._id };
    // let token = jwt.sign(payloadParent, process.env.secretOrKey);

    return res.status(200).send({ msg: "login with succes", exists });
  } catch (error) {
    console.error(`signin error => ${error}`);
    return res.status(500).send({ msg: "you can't login ", error });
  }
};
