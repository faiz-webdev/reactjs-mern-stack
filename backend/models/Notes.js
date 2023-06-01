const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  tag: {
    type: String,
    default: 'general',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("notes", notesSchema);
