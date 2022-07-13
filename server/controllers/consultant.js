const Schema = require("mongoose");
const User = require("../models/user");
const Consultant = require("../models/consultant");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

exports.updateConsultant = async (req, res) => {
  try {
    //get the profil id from the req param
    const { id } = req.params;
    //converted to n object
    const userId = Schema.Types.ObjectId(id);

    const { user, ...rest } = req.body;

    const saltRound = 8;
    const salt = bcrypt.genSaltSync(saltRound);
    //hash the password
    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;
    user.passwordConfirm = hash;

    const updateUser = await User.findByIdAndUpdate(id, {
      $set: { ...user },
    });
    // console.log("updateUser =>", updateUser);
    const updateConsultant = await Consultant.findOneAndUpdate(
      { user: userId },
      { ...rest }
    );
    // console.log("updateParent =>", updateParent);

    if ((await updateUser.save()) && (await updateConsultant.save())) {
      const edited = await Consultant({ user: userId }).populate("user");
      if (edited)
        return res.status(200).send({ msg: "your profile is updated", edited });
    }
  } catch (error) {
    console.error("updateProfile error=>", error);
    res.status(500).send({ msg: "updateProfile error", error });
  }
};
