//require the parent/child schema for registration
const Parent = require("../models/parent");
const { Child } = require("../models/child");
const { User } = require("../models/user");

//third-party models
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

/** registration conroller */
exports.signup = async (req, res) => {
  //distracturing
  const { email, password, passwordConfirm } = req.body.user;
  // console.log("email =>", email);
  try {
    /*******verify if the email already exists******/
    const userEmail = await Parent.find({ "user.email": email });
    // console.log("userEmail =>", userEmail);

    //1.email exists
    if (userEmail.length !== 0)
      return res.status(403).send("this email already exists");

    //2.email doesn't exist    ;
    const newParent = await new Parent(req.body);
    // console.log("newParent => " + newParent);

    /*****before move to registration we should verify duplicated children  */
    const children = newParent.child;
    // console.log("children => " + children);
    const duplicatedChild = children.map((el) => el.childFName);
    const duplacted = await duplicatedChild.some(
      (name, index) => duplicatedChild.indexOf(name) !== index
    );
    //1.false errror message
    if (duplacted) return res.status(409).send("duplacted child name");

    //2.if true we proceed

    //before hashing the password we should match them
    if (password !== passwordConfirm)
      return res.status(406).send("passords didn't match");

    /**** hashing the passwords before saving the parent (npm i bcryptjs) */
    //generate a salt round for our hash
    const saltRound = 8;
    const salt = bcrypt.genSaltSync(saltRound);
    //hash the password
    const hash = bcrypt.hashSync(password, salt);
    //we add the hash to the user password
    newParent.user.password = hash;
    newParent.user.passwordConfirm = hash;

    //give the parent a role
    newParent.user.role = 2;

    /********* associate a token to our new parent( npm i jsonwebtoken)*/

    const payloadParent = { id: newParent.user._id };
    let token = jwt.sign(payloadParent, process.env.secretOrKey);

    if (newParent && !duplacted) {
      (await newParent.save()) && Child.insertMany(children);
      return res.status(200).send({
        msg: `welcome ${newParent.user.firstName} ${newParent.user.lastName}`,
        newParent,
        token,
      });
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
    const exist = await Parent.findOne({ "user.email": email });
    // console.log("exist => ", exist);
    if (!exist) {
      return res
        .status(400)
        .send({ msg: "you don't have an account, sign up first" });
    }

    //verify for the match fo password using the bcrypt
    const match = await bcrypt.compare(password, exist.user.password);
    // console.log("match =>", match);
    if (!match) {
      return res.status(400).send({ msg: "you have the rong password" });
    }

    const payloadParent = { id: exist.user._id };
    let token = jwt.sign(payloadParent, process.env.secretOrKey);

    return res.status(200).send({ msg: "login with succes", exist, token });
  } catch (error) {
    console.error(`signin error => ${error}`);
    return res.status(500).send({ msg: "you can't login ", error });
  }
};
