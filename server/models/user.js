const { Schema, model } = require("mongoose");

const userSchema = new Schema({
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
});
module.exports = User = model("user", userSchema);
