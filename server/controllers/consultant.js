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

exports.addExperience = async (req, res) => {
  try {
    const { _id } = req.user;
    // console.log("id =>", _id);
    const consultant = await Consultant.findOne({ user: _id }).populate("user");
    consultant.experiences.push(req.body);
    // console.log("consultant =>", consultant);
    consultant.save();
    return res.send(consultant);
  } catch (error) {
    console.error("addExperiences error =>", error);
    return res.status(500).json({ ...error });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;

    const consultant = await Consultant.findOne({ user: _id }).populate("user");
    consultant.experiences.pull({ _id: id });
    consultant.save();
    return res.status(200).send(consultant);
  } catch (error) {
    console.error("deleteExperience error =>", error);
    return res.status(500).json({ ...error });
  }
};

exports.addInternship = async (req, res) => {
  try {
    const { _id } = req.user;
    const consultant = await Consultant.findOne({ user: _id }).populate("user");
    consultant.internships.push(req.body);
    // console.log("consultant =>", consultant);
    consultant.save();
    return res.status(200).send(consultant);
  } catch (error) {
    console.error("addExperiences error =>", error);
    return res.status(500).json({ ...error });
  }
};

exports.deleteInternship = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;

    const consultant = await Consultant.findOne({ user: _id }).populate("user");
    consultant.internships.pull({ _id: id });
    consultant.save();
    return res.status(200).send(consultant);
  } catch (error) {
    console.error("deleteExperience error =>", error);
    return res.status(500).json({ ...error });
  }
};
