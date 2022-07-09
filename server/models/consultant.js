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
  educations: {
    degree: { type: String },
    university: { type: String },
    graduation: { type: Date },
  },

  experiences: [
    {
      job: { type: String },
      society: { type: String },
      dateExp: { type: Date },
    },
  ],
  internships: [
    {
      title: { type: String },
      company: { type: String },
      dateInt: { type: Date },
    },
  ],
  offers: { type: String },
  certificates: [
    { type: Schema.Types.ObjectId, ref: "Image", required: false },
  ],
  // accepted: {
  //   type: Boolean,
  //   default: false,
  // },
});

module.exports = Consultant = model("consultant", consultantSchema);
