const { Schema, model } = require("mongoose");

const childSchema = new Schema({
  childFName: { type: String },
  childLName: {
    type: String,
    required: [true, "enter your child last name"],
  },
  birthDate: { type: Date },
  disorder: {
    disType: { type: String },
    disEstablishment: { type: String },
    disDate: { type: Date },
  },
  integration: {
    integrated: { type: Boolean },
    integEstablishment: {
      type: String,
      required: () => {
        return this.integrated === true;
      },
    },
  },
  inscritDate: {
    type: Date,
    default: Date.now(),
  },
});

const parentSchema = new Schema({
  role: {
    type: Number,
    default: 2,
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
    postal: { type: Number },
  },
  job: { type: String },
  familyMembers: { type: Number },
  child: { type: [childSchema] },
  demandes: { type: String },
  registerDate: {
    type: Date,
    default: Date.now(),
  },
});

const Parent = model("parent", parentSchema);
const Child = model("child", childSchema);

module.exports = { Parent, Child };
