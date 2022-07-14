// const { Schema, model } = require("mongoose");
var mongoose = require("mongoose");
var validate = require("mongoose-validator");
require("mongoose-type-url");

const adSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  link: { type: mongoose.SchemaTypes.Url },
});

module.exports = Ad = mongoose.model("ad", adSchema);
