const Schema = require("mongoose");
const User = require("../models/user");
const Parent = require("../models/parent");
const Consultant = require("../models/consultant");
const Child = require("../models/child");

//update profile
exports.updateAdmin = async (req, res) => {
  try {
    const { id } = req.user._id;
    const myId = Schema.Types.ObjectId(id);

    // const admin = await User.findById(me);
    // console.log("the admin =>", admin);
    const admin = await User.findByIdAndUpdate(myId, { ...req.body });
    admin.save();
    return res.status(200).json(admin);
  } catch (error) {
    console.error("updateAdmin error=>", error);
    return res.status(500).send({ msg: "updateAdmin error", error });
  }
};

//display all users
exports.displayUsers = async (req, res) => {
  try {
    const parents = await Parent.find().populate("user");
    const consultants = await Consultant.find().populate("user");
    const users = [...parents, ...consultants];
    // console.log("displayUsers =>", users);

    return res.status(200).json(users);
  } catch (error) {
    console.error("displayUsers error=>", error);
    return res.status(500).send({ msg: "displayUsers error", error });
  }
};

//display parents
exports.displayParents = async (req, res) => {
  try {
    const parents = await Parent.find().populate("user");
    return res.status(200).json(parents);
  } catch (error) {
    console.error("displayParents error=>", error);
    return res.status(500).send({ msg: "displayParents error", error });
  }
};

exports.displayConsultants = async (req, res) => {
  try {
    const consultants = await Consultant.find().populate("user");
    return res.status(200).json(consultants);
  } catch (error) {
    console.error("displayConsultants error=>", error);
    return res.status(500).send({ msg: "displayConsultants error", error });
  }
};

exports.displayChildren = async (req, res) => {
  try {
    const children = await Child.find();
    return res.status(200).json(children);
  } catch (error) {
    console.error("displayChildren error=>", error);
    return res.status(500).send({ msg: "displayChildren error", error });
  }
};

//get by id
exports.userById = async (req, res) => {
  try {
    let found;
    const { id } = req.params;
    const user = await User.findById(id);
    console.log("my user =>", user);
    if (user.category === "parent") {
      found = await Parent.findOne({ user: user._id }).populate("user");
    }
    if (user.category === "consultant") {
      found = await Consultant.findOne({ user: user._id }).populate("user");
    }
    return res.status(200).json(found);
  } catch (error) {
    console.error("userById error=>", error);
    res.status(500).send("there is no such a user ");
  }
};
exports.parentById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const parent = await Parent.findOne({ user: user._id }).populate("user");
    return res.status(200).json(parent);
  } catch (error) {
    console.error("parentById error=>", error);
    res.status(500).send("there is no such a parent ");
  }
};
exports.consultantById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const consultant = await Consultant.findOne({ user: user._id }).populate(
      "user"
    );
    return res.status(200).json(consultant);
  } catch (error) {
    console.error("consultantById error=>", error);
    res.status(500).send("there is no such a consultant ");
  }
};

exports.childById = async (req, res) => {
  try {
    const { id } = req.params;
    const child = await Child.findById(id).populate("parent");
    res.status(200).send({ msg: "your child", child });
  } catch (error) {
    console.error("childById error=>", error);
    res.status(500).send("there is no such a child ");
  }
};

//deletes
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userToDelete = await User.findById(id);
    if (userToDelete.category === "parent") {
      const children = await Child.findOneAndDelete({
        parent: userToDelete._id,
      });
      await Parent.findOneAndDelete({
        user: userToDelete._id,
      });
    }

    if (userToDelete.category === "consultant") {
      await Consultant.findOneAndDelete({
        user: userToDelete._id,
      });
    }
    await User.findByIdAndDelete(id);

    return res.status(200).json({ msg: "deleteUser success" });
  } catch (error) {
    console.error("deleteUser error=>", error);
    res.status(500).send({ msg: "delete user failed", error });
  }
};
exports.deleteParent = async (req, res) => {
  try {
    const { id } = req.params;
    const userToDelete = await User.findById(id);

    const children = await Child.findOneAndDelete({
      parent: userToDelete._id,
    });
    await Parent.findOneAndDelete({
      user: userToDelete._id,
    });

    await User.findByIdAndDelete(id);

    return res.status(200).json({ msg: "deleteParent success" });
  } catch (error) {
    console.error("deleteParent error=>", error);
    res.status(500).send({ msg: "deleteParent failed", error });
  }
};
exports.deleteConsultant = async (req, res) => {
  try {
    const { id } = req.params;
    const userToDelete = await User.findById(id);

    await Consultant.findOneAndDelete({
      user: userToDelete._id,
    });

    await User.findByIdAndDelete(id);

    return res.status(200).json({ msg: "deleteUser success" });
  } catch (error) {
    console.error("deleteConsultant error=>", error);
    res.status(500).send({ msg: "deleteConsultant failed", error });
  }
};
exports.deleteChild = async (req, res) => {
  try {
    const { id } = req.params;
    await Child.findByIdAndDelete(id);
    return res.status(200).json({ msg: "deleteChild success" });
  } catch (error) {
    console.error("deleteChild error=>", error);
    res.status(500).send({ msg: "deleteChild failed", error });
  }
};
