const { Schema, model } = require("mongoose");

const parentSchema = new Schema({
  // id: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  status: { type: String },
  job: { type: String },
  familyMembers: { type: Number },
  demandes: { type: String },
  registerDate: {
    type: Date,
    default: Date.now(),
  },
  child: [
    {
      type: Schema.Types.ObjectId,
      ref: "Child",
      required: false,
    },
  ],
});

module.exports = Parent = model("parent", parentSchema);
