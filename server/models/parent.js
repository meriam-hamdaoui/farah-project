const { Schema, model } = require("mongoose");

const childSchema = new Schema({
  childFName: {
    type: String,
    required: [true, "enter your child first name"],
  },
  childLName: {
    type: String,
    required: [true, "enter your child last name"],
  },
  birthDate: {
    type: Date,
    required: [true, "your child birth date??"],
  },
  disorder: {
    disType: {
      type: String,
      required: [true, "enter your child disorder type"],
    },
    disEstablishment: {
      type: String,
      required: [true, "enter diagnostic establishment"],
    },
    disDate: {
      type: Date,
      required: [true, "when did your child has diagnostics"],
    },
  },
  integration: {
    integrated: {
      type: Boolean,
      required: [true, "choose a field"],
    },
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
    zipCode: { type: Number },
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
