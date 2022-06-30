const User = require("../models/user");
const Parent = require("../models/parent");
const Consultant = require("../models/consultant");

//third-party models
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

const createActor = async (newUser, actor, res) => {
  const payload = { id: actor.user._id };
  let token = jwt.sign(payload, process.env.secretOrKey);

  if ((await actor.save()) && (await newUser.save())) {
    res.status(200).send({
      msg: `welcome ${newUser.firstName} ${newUser.lastName} as a ${newUser.category}`,
      newUser,
      actor,
      token,
    });
  }
};

exports.signup = async (req, res) => {
  const { user, ...rest } = req.body;
  const { email, password, category } = user;
  try {
    const exists = await User.findOne({ email });
    //1. email exist
    if (exists) return res.status(403).send("this email already exists");

    //2. email doesn't exists
    const newUser = await new User(user);

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

    /*befor create the new actor and save it 
    we need  to specify which one: parent or consultant*/
    if (newUser.category === "parent") {
      const newParent = await new Parent({
        user: newUser._id,
        ...rest,
      });
      createActor(newUser, newParent, res);
    } else if (newUser.category === "consultant") {
      newUser.role = 2;
      const newConsultant = await new Consultant({
        user: newUser._id,
        ...rest,
      });
      createActor(newUser, newConsultant, res);
    } else {
      return res.status(500).send("OUPS!!! choose a user category please");
    }
  } catch (errors) {
    console.error(`signup error => ${errors}`);
    res.status(500).send({ msg: "signup error", error: errors });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const found = await User.findOne({ email: email });
    if (!found) {
      return res
        .status(400)
        .send({ msg: "you don't have an account, sign up first" });
    } else {
      // verify for the match fo password using the bcrypt
      const match = await bcrypt.compare(password, found.password);
      // console.log("match =>", match);
      if (!match) {
        return res.status(400).send({ msg: "you have the wrong password" });
      }
      const payload = { id: found._id };
      let token = jwt.sign(payload, process.env.secretOrKey);
      //   if(found.category === "parent") {
      //     const parent = await Parent.
      //   }
      return res.status(200).send({ msg: "login with succes", found, token });
    }
  } catch (errors) {
    console.error(`signin error => ${errors}`);
    return res.status(500).send({ msg: "you can't login ", error: errors });
  }
};
