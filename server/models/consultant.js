const { Schema, model } = require("mongoose");

const { userSchema } = require("./user");
const { imageSchema } = require("./image");

const consultantSchema = new Schema({
  // id: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  gender: { type: String },
  domain: { type: String },
  education: [
    {
      degree: { type: String },
      university: { type: String },
      diploma: {
        type: Schema.Types.ObjectId,
        ref: "Image",
      },
    },
  ],
  experiences: [
    {
      title: { type: String },
      company: { type: String },
      certificate: {
        type: Schema.Types.ObjectId,
        ref: "Image",
      },
    },
  ],
  internships: [
    {
      title: { type: String },
      company: { type: String },
      certificate: {
        type: Schema.Types.ObjectId,
        ref: "Image",
      },
    },
  ],
  offers: { type: String },
  accepted: {
    type: Boolean,
    default: false,
  },
});

module.exports = Consultant = model("consultant", consultantSchema);
