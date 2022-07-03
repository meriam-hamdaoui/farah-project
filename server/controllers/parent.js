//parent controllers
const Schema = require("mongoose");
const User = require("../models/user");
const Parent = require("../models/parent");

//parent
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
exports.addChildren = async (req, res) => {};

exports.getChildren = async (req, res) => {};

exports.getChild = async (req, res) => {};

exports.updateChild = async (req, res) => {};

exports.deleteChild = async (req, res) => {};
