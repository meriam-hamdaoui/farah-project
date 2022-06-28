const { Schema, model } = require("mongoose");

const childSchema = new Schema({
  childFName: { type: String },
  childLName: { type: String },
  birthDate: { type: Date },
  diagnosis: {
    disorder: { type: String },
    establishment: { type: String },
    date: { type: Date },
  },
  integration: {
    integrated: { type: Boolean },
    establishment: {
      type: String,
      required: () => {
        return this.integrated === true;
      },
    },
  },
  // parent: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Parent",
  // },
  inscritDate: {
    type: Date,
    default: Date.now(),
  },
});

const Child = model("child", childSchema);
module.exports = { Child, childSchema };
