var express = require('express');
var router = express.Router();
var User = require("../models/userModel");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const noteModel = require('../models/noteModel');
const multer = require('multer');
const userModel = require('../models/userModel');
const path = require("path");
const fs = require("fs");
const e = require('express');

let secret = "secret";

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/getNotes", async (req, res) => {
  let notes = await noteModel.find({ uploadedBy: req.body.userId });
  console.log(notes)
  if (notes.length > 0) {
    res.json(notes);
  }
  else {
    res.json({
      success: false,
      msg: "No Notes Found !"
    })
  }
});

router.post("/addNote", async (req, res) => {
  let { title, description, content, isImportant, uploadedBy } = req.body;

  let note = await noteModel.create({
    title,
    description,
    content,
    isImportant,
    uploadedBy
  });

  res.json({
    success: true,
    noteID: note._id,
    userID: uploadedBy
  });

});

router.post("/deleteNote", async (req, res) => {
  try {
    let { noteId } = req.body;
    console.log("Request body:", req.body);

    // Validate noteId
    if (!noteId) {
      return res.status(400).json({ success: false, message: "noteId is required" });
    }

    // Find the note
    let note = await noteModel.findOne({ _id: noteId });
    console.log("Note found:", note);

    if (!note) {
      return res.status(404).json({ success: false, message: "Note not found" });
    }

    // Add deletion logic if needed
    await noteModel.deleteOne({ _id: noteId });

    res.json({
      success: true,
      message: "Note deleted successfully"
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred"
    });
  }
});

router.post("/updateNote", async (req, res) => {
  try {
    let { noteId, title, description, content, isImportant, uploadedBy } = req.body;
    console.log("Request body:", req.body);

    // Validate noteId
    if (!noteId) {
      return res.status(400).json({ success: false, message: "noteId is required" });
    }

    // Find the note
    let note = await noteModel.findOne({ _id: noteId });
    console.log("Note found:", note);

    if (!note) {
      return res.status(404).json({ success: false, message: "Note not found" });
    }

    // Add deletion logic if needed
    await noteModel.updateOne({ _id: noteId }, {
      title,
      description,
      content,
      isImportant,
      uploadedBy
    });

    res.json({
      success: true,
      message: "Note updated successfully"
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred"
    });
  }
});

router.post("/getNote", async (req, res) => {
  let { noteId } = req.body;
  let note = await noteModel.findOne({ _id: noteId });
  console.log(note)
  if (note) {
    res.json(note);
  }
  else {
    res.json({
      success: false,
      msg: "No Note Found !"
    })
  }
});

// apis for users

router.post("/getUserDetails", async (req, res) => {
  let { userId } = req.body;
  let user = await userModel.findOne({ _id: userId });
  if (user) {
    res.json(user);
  }
  else {
    res.json({
      success: false,
      msg: "No User Found !"
    });
  }
})


module.exports = router;