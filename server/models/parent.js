const { Schema, model } = require("mongoose");

const { childSchema } = require("./child");

const { userSchema } = require("./user");

const parentSchema = new Schema({
  user: { type: userSchema },
  status: { type: String },
  job: { type: String },
  familyMembers: { type: Number },
  child: { type: [childSchema] },
  demandes: { type: String },
  registerDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Parent = model("parent", parentSchema);
