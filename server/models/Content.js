const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Content", contentSchema);
