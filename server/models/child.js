const { Schema, model } = require("mongoose");

const childSchema = new Schema({
  childFName: { type: String },
  childLName: { type: String },
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

const Child = model("child", childSchema);
module.exports = { Child, childSchema };
