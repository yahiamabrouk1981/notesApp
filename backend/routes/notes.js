const express = require("express");
const Note = require("../models/Notes");

const router = express.Router();

// Create a note
router.post("/notes", async (req, res) => {
  try {
    const note = new Note(req.body);
    await note.save();
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all notes
router.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single note
router.get("/notes/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a note
router.put("/notes/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a note
router.delete("/notes/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Delete all notes
router.delete("/notes", async (req, res) => {
  try {
    await Note.deleteMany({});
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
