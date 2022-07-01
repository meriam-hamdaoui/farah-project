const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  name: { type: String },
  extension: { type: String },
  image: {
    type: Buffer,
    content: String,
  },
});

const Image = model("image", imageSchema);
module.exports = { Image, imageSchema };
