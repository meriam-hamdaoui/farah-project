const Consultant = require("../models/consultant");
const { Image } = require("../models/image");
const { User } = require("../models/user");

//third-party models
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

/** registration conroller */
exports.signConsultant = async (req, res) => {
  const { user, ...rest } = req.body;
  console.log("user => ", user);

  // console.log("rest => ", rest);
  const { email } = user;
  console.log("email => ", email);

  try {
    //search for existant user with the entred email
    const exists = await User.findOne({ email: email });
    console.log("exists => ", exists);

    //1. if exists
    if (exists) return res.status(403).send("this email already exists");

    //2. if not
    const newUser = await new User(user);
    const newConsultant = await new Consultant({
      user: newUser._id,
      ...rest,
    });
    // console.log("newUser =>", newUser);
    // console.log("newConsultant =>", newConsultant);
    const saltRound = 8;
    const salt = bcrypt.genSaltSync(saltRound);
    //hash the password
    const hash = bcrypt.hashSync(newUser.password, salt);

    newUser.password = hash;
    newUser.passwordConfirm = hash;

    //give the parent a role
    newUser.role = 3;

    const payloadConsultant = { id: newConsultant.user._id };
    let token = jwt.sign(payloadConsultant, process.env.secretOrKey);

    if (newUser && newConsultant) {
      if ((await newConsultant.save()) && (await newUser.save())) {
        return res.status(200).send({
          msg: `welcome ${newUser.firstName} ${newUser.lastName}`,
          newUser,
          newConsultant,
          token,
        });
      }
    }
  } catch (error) {
    console.error(`signup error => ${error}`);
    return res.status(500).send({ msg: "signup error", error });
  }
};

/** signin consultant */
exports.signin = async (req, res) => {
  //distracturing
  const { email, password } = req.body;
  try {
    //check first for the existance of our user
    const exists = await Consultant.findOne({ "user.email": email });
    // console.log("exist => ", exist);
    if (!exists) {
      return res
        .status(400)
        .send({ msg: "you don't have an account, sign up first" });
    }

    //verify for the match fo password using the bcrypt
    const match = await bcrypt.compare(password, exists.user.password);
    // console.log("match =>", match);
    if (!match) {
      return res.status(400).send({ msg: "you have the rong password" });
    }

    const payloadParent = { id: exists.user._id };
    let token = jwt.sign(payloadParent, process.env.secretOrKey);

    return res.status(200).send({ msg: "login with succes", exists, token });
  } catch (error) {
    console.error(`signin error => ${error}`);
    return res.status(500).send({ msg: "you can't login ", error });
  }
};

// exports.signup = async (req, res) => {
//   //distracturing
//   const { email, password, passwordConfirm } = req.body.user;
//   // console.log("email =>", email);
//   try {
//     /*******verify if the email already exists******/
//     const userEmail = await Consultant.findOne({ "user.email": email });
//     console.log("userEmail =>", userEmail);

//     //1.email exists
//     if (userEmail) return res.status(403).send("this email already exists");

//     //2.email doesn't exist    ;
//     const newConsultant = await new Consultant(req.body);

//     console.log("newConsultant => " + newConsultant);

//     //before hashing the password we should match them
//     if (password !== passwordConfirm)
//       return res.status(406).send("passords didn't match");

//     /**** hashing the passwords before saving the parent (npm i bcryptjs) */
//     //generate a salt round for our hash
//     const saltRound = 8;
//     const salt = bcrypt.genSaltSync(saltRound);
//     //hash the password
//     const hash = bcrypt.hashSync(password, salt);
//     //we add the hash to the user password
//     newConsultant.user.password = hash;
//     newConsultant.user.passwordConfirm = hash;

//     //give the parent a role
//     newConsultant.user.role = 3;

//     /********* associate a token to our new parent( npm i jsonwebtoken)*/

//     const payloadParent = { id: newConsultant.user._id };
//     let token = jwt.sign(payloadParent, process.env.secretOrKey);

//     if (newConsultant) {
//       await newConsultant.save();
//       return res.status(200).send({
//         msg: `welcome ${newConsultant.user.firstName} ${newConsultant.user.lastName}`,
//         newConsultant,
//         token,
//       });
//     }
//   } catch (error) {
//     console.error(`signup error => ${error}`);
//     return res.status(500).send({ msg: "signup error", error });
//   }
// };
