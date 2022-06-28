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
      diploma: { type: imageSchema },
    },
  ],
  experiences: [
    {
      title: { type: String },
      company: { type: String },
      certificate: { type: imageSchema },
    },
  ],
  internships: [
    {
      title: { type: String },
      company: { type: String },
      certificate: { type: imageSchema },
    },
  ],
  offers: { type: String },
});

module.exports = Consultant = model("consultant", consultantSchema);
