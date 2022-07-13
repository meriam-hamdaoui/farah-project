//user controllers, which are common between all users
const User = require("../models/user");
const Parent = require("../models/parent");
const Consultant = require("../models/consultant");
const Child = require("../models/child");

//third-party models
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

//to avoid the boilerplate, I create an arrow function
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
  // console.log("req.url =>", req.url);

  //for more securité
  const path = req.url;
  const destination = path.slice(path.lastIndexOf("/") + 1);
  // console.log("category =>", category);

  const { user, ...rest } = req.body;
  const { email } = user;
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

    //we add the hash to the user password
    newUser.password = hash;
    newUser.passwordConfirm = hash;

    /*befor create the new actor and save it 
    we need  to specify which one: parent or consultant*/
    if (newUser.category === "parent" && destination === "parent") {
      const newParent = await new Parent({
        user: newUser._id,
        ...rest,
      });
      createActor(newUser, newParent, res);
    } else if (
      newUser.category === "consultant" &&
      destination === "consultant"
    ) {
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
    const exists = await User.findOne({ email });
    // console.log("exists signin =>", exists);

    if (!exists) {
      return res
        .status(404)
        .send({ msg: "there's not account with this email" });
    }

    const match = await bcrypt.compare(password, exists.password);
    if (!match) {
      return res
        .status(401)
        .send({ msg: "did you you forget your password??" });
    }

    const payload = { id: exists._id };
    const token = jwt.sign(payload, process.env.secretOrKey);
    res.status(200).send({ msg: "welcom a board ", exists, token });
  } catch (error) {
    console.error("signin error =>", error);
    res.status(500).send({ msg: "OUPS!!! signin error", error });
  }
};

exports.getProfile = async (req, res) => {
  const { role, _id } = req.user;
  // console.log("role =>", role);
  try {
    if (role === 1) {
      const parent = await Parent.findOne({ user: _id }).populate("user");
      req.user = parent;
    }

    if (role === 2) {
      const consultant = await Consultant.findOne({ user: _id }).populate(
        "user"
      );
      req.user = consultant;
    }

    const profil = req.user;
    return res
      .status(200)
      .send({ msg: `${profil.user.category} profil`, profil });
  } catch (error) {
    console.error("getProfile =>", error);
    return res.status(500).send({ msg: "getProfile  user=>", error });
  }
};

// exports.signin = async (req, res) => {
//   console.log("category =>", category);
//   const { email, password } = req.body;
//   try {
//     const found = await User.findOne({ email: email });
//     // console.log("fouand =>", found);
//     if (!found) {
//       return res
//         .status(400)
//         .send({ msg: "you don't have an account, sign up first" });
//     } else {
//       // verify for the match fo password using the bcrypt
//       const match = await bcrypt.compare(password, found.password);
//       // console.log("match =>", match);
//       if (!match) {
//         return res.status(400).send({ msg: "you have the wrong password" });
//       }
//       const payload = { id: found._id };
//       // console.log("payload =>", payload);
//       let token = jwt.sign(payload, process.env.secretOrKey);
//       if (found.category === "parent") {
//         // const parent = await Parent.findOne({ user: found._id }).populate(
//         //   "user"
//         // );
//         const parent = await Parent.findOne(found._id).populate("user");

//         // console.log("parent  => ", parent);
//         return res.status(200).send({
//           msg: `logged in as ${found.category}  with succes `,
//           parent,
//           token,
//         });
//       }

//       if (found.category === "consultant") {
//         const consultant = await Consultant.findOne({
//           user: found._id,
//         }).populate("user");
//         if (!consultant.accepted) {
//           return res
//             .status(500)
//             .send({ msg: "your request is not approuved yet" });
//         } else if (consultant.accepted) {
//           return res.status(200).send({
//             msg: `logged in as ${found.category} with succes`,
//             consultant,
//             token,
//           });
//         }
//       }
//     }
//   } catch (errors) {
//     console.error(`signin error => ${errors}`);
//     return res.status(500).send({ msg: "you can't login ", error: errors });
//   }
// };
