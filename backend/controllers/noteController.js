import Note from "../models/Note.js";

// Create note
export const createNote = async (req, res) => {
  try {
    const { title, content, category } = req.body;

    if (!title || !content) {
      return res.status(400).json({message: "Title and content are required"});
    }

    const note = await Note.create({ title, content, category });
    res.status(201).json(note);
  }
  catch (error) {
    res.status(500).json({ message: error.message});
  }
}

// Get all notes
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  }
  catch (error) {
    res.status(500).json({ message: error.message});
  }
}

// get one note by id
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  }
  catch (error) {
    res.status(500).json({message: error.message});
  }
}

// Update note
export const updateNote = async(req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after", runValidators: true }
    );
    if (!note) {
      return res.status(404).json({message: "Note not found"});
    }
    res.status(200).json(note);
  }
  catch (error) {
    res.status(500).json({message: error.message});
  }
}

// Delete note
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).json({message: "Note not found"});
    }
    res.status(200).json({message: "Note deleted successfully"});
  }
  catch (error) {
    res.status(500).json({message: error.message});
  }
}