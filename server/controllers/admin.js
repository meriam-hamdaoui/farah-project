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

//didn't work
exports.userById = async (req, res) => {
  const { id } = req.params;
  try {
    let found;
    const user = await User.findById(id);
    // console.log("user log", user);
    // const userId = Schema.Types.ObjectId(id);

    if (user.category === "parent") {
      found = Parent.findOne({ user: user._id }).populate("user");
    }
    console.log("found userById=>", found);
    // return res.status(200).send({ found });
  } catch (err) {
    console.error("userById error=>", error);
    res.status(500).send("there is no getting naw ");
  }
};
exports.parentById = async (req, res) => {};
exports.consultantById = async (req, res) => {};
exports.childById = async (req, res) => {};
