const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

// Create a note
router.post("/notes", async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.json(note);
});

// Get all notes
router.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Get a single note
router.get("/notes/:id", async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
});

// Update a note
router.put("/notes/:id", async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(note);
});

// Delete a note
router.delete("/notes/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
