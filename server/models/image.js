const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  consultant: { type: Schema.Types.ObjectId, ref: "User" },
  name: { type: String },
  extension: { type: String },
  type: { type: String },
});

const Image = model("image", imageSchema);
module.exports = { Image, imageSchema };
