const { Schema, model } = require("mongoose");

const { childSchema } = require("./child");

const { userSchema } = require("./user");

const parentSchema = new Schema({
  // id: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  status: { type: String },
  job: { type: String },
  familyMembers: { type: Number },
  child: [
    {
      type: childSchema,
      required: false,
    },
  ],
  demandes: { type: String },
  registerDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Parent = model("parent", parentSchema);
