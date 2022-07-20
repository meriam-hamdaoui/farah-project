//parent controllers
const Schema = require("mongoose");
const User = require("../models/user");
const Parent = require("../models/parent");
const Child = require("../models/child");

let bcrypt = require("bcryptjs");

exports.updateParent = async (req, res) => {
  try {
    //get the profil id from the req param
    const { id } = req.params;
    // console.log("updateProfile id =>", id);
    const userId = Schema.Types.ObjectId(id);
    const { user, ...rest } = req.body;

    const { password } = user;

    const saltRound = 8;
    const salt = bcrypt.genSaltSync(saltRound);
    //hash the password
    const hash = bcrypt.hashSync(password, salt);

    req.body.user.password = hash;
    req.body.user.passwordConfirm = hash;

    const updateUser = await User.findByIdAndUpdate(id, {
      $set: { ...req.body.user },
    });
    // console.log("updateUser =>", updateUser);
    const updateParent = await Parent.findOneAndUpdate(
      { user: userId },
      { ...rest }
    );
    // console.log("updateParent =>", updateParent);

    if ((await updateUser.save()) && (await updateParent.save())) {
      const edited = await Parent.findOne({ user: userId }).populate("user");
      if (edited)
        return res.status(200).send({ msg: "your profile is updated", edited });
    }
  } catch (error) {
    console.error("updateProfile error=>", error);
    res.status(500).send({ msg: "updateProfile error", error });
  }
};

//children
exports.addChildren = async (req, res) => {
  try {
    const child = req.body;
    // console.log("child =>", child);
    const children = await Child.find({ parent: req.user._id });
    // console.log("children=>", children);

    let exists = children.find((el) => {
      if (
        el.childFName === child.childFName &&
        el.childLName === child.childLName
      ) {
        return true;
      }
    });
    if (exists) {
      return res.status(403).send({ msg: "you did add this child", exists });
    }
    const newChild = await new Child({
      parent: req.user._id,
      ...child,
    });
    newChild.save();
    return res.status(200).send({ msg: "add children succes", newChild });
  } catch (error) {
    console.error("addChildren error =>", error);
    return res.status(500).json({ ...error });
  }
};

exports.getChildren = async (req, res) => {
  try {
    const children = await Child.find({ parent: req.user._id });

    return res.status(200).json({ msg: "your children", children });
  } catch (error) {
    console.error("error getChildren =>", error);
    return res.status(500).json({ ...error });
  }
};

exports.getChild = async (req, res) => {
  const { id } = req.params;
  try {
    const theChild = await Child.findById(id);
    return res.status(200).json({ msg: "your child by ID", theChild });
  } catch (error) {
    console.error("get child error =>", error);
    return res.status(500).json({ ...error });
  }
};

exports.updateChild = async (req, res) => {
  const { id } = req.params;
  try {
    const editChild = await Child.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    // console.log("editChild =>", editChild);
    return res.status(200).json({ msg: "updated with succes" });
  } catch (error) {
    console.error("edit child error =>", error);
    return res.status(500).json({ ...error });
  }
};

exports.deleteChild = async (req, res) => {
  const { id } = req.params;
  try {
    const childDeleted = await Child.findByIdAndDelete(id);
    return res.status(200).json({ msg: "delete child successefully" });
  } catch (error) {
    console.error("deleteChild error =>", error);
    return res.status(500).json({ ...error });
  }
};
