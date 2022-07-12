const { Schema, model } = require("mongoose");
const { childSchema } = require("./child");

const parentSchema = new Schema({
  // id: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  civil: { type: String },
  job: { type: String },
  familyMembers: { type: Number },
  demandes: { type: String },
  registerDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Parent = model("parent", parentSchema);
