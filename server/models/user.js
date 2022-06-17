const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
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
});
const User = model("user", userSchema);
module.exports = { User, userSchema };
