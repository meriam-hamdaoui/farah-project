//parent controllers
const User = require("../models/user");
const Parent = require("../models/parent");

//parent
exports.getProfile = async (req, res) => {
  const userProfile = req.user;
  try {
  } catch (error) {}
};

exports.updateProfile = async (req, res) => {};

//children
exports.addChildren = async (req, res) => {};

exports.getChildren = async (req, res) => {};

exports.getChild = async (req, res) => {};

exports.updateChild = async (req, res) => {};

exports.deleteChild = async (req, res) => {};
