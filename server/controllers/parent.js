//parent controllers
const Schema = require("mongoose");
const User = require("../models/user");
const Parent = require("../models/parent");
const Child = require("../models/child");

//parent à modifier
exports.getProfile = async (req, res) => {
  // console.log("getProfile req =>", req.user);
  try {
    if (req.user.category === "parent") {
      const parent = await Parent.findOne({ user: req.user._id }).populate(
        "user"
      );
      // console.log("getProfile parent =>", parent);
      req.user = parent;
      return res.status(200).send(parent);
    }
  } catch (error) {
    console.error("getProfile =>", error);
    return res.status(500).send({ msg: "getProfile =>", error });
  }
};

exports.updateProfile = async (req, res) => {
  //get the profil id from the req param
  const { id } = req.params;
  // console.log("updateProfile id =>", id);
  const userId = Schema.Types.ObjectId(id);
  const { user, ...rest } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, {
      $set: { ...user },
    });
    // console.log("updateUser =>", updateUser);
    const updateParent = await Parent.findOneAndUpdate(
      { user: userId },
      { ...rest }
    );
    // console.log("updateParent =>", updateParent);

    if ((await updateUser.save()) && (await updateParent.save())) {
      const updatedProfile = await Parent.findOne({ user: userId }).populate(
        "user"
      );
      if (updatedProfile)
        return res
          .status(200)
          .send({ msg: "your profile is updated", updatedProfile });
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
    console.log("children=>", children);

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
    res.status(200).send({ msg: "add children succes", newChild });
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

exports.updateChild = async (req, res) => {};

exports.deleteChild = async (req, res) => {};
