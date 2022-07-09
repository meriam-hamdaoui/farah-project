const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: {
    type: Number,
    default: 1,
  },
  firstName: { type: String },
  lastName: { type: String },
  email: {
    type: String,
    unique: true,
  },
  password: { type: String },
  passwordConfirm: { type: String },
  phone: {
    type: Number,
  },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: Number },
  },
  category: {
    type: String,
    default: "parent",
  },
  agrement: { type: String },
});
module.exports = User = mongoose.model("User", userSchema);
