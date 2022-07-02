const { Schema, model } = require("mongoose");

const childSchema = new Schema({
  //avoir mm id que son père userSchema
  parent: { type: Schema.Types.ObjectId, ref: "User" },
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
  inscritDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Child = model("child", childSchema);
