const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const notesSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  isImportant: Boolean,
  uploadedBy: String,
  date:{
    type: Date,
    default: Date.now
  }
});

mongoose.model("Notes", notesSchema);

module.exports = mongoose.model("Notes")