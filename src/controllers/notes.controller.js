const Note = require('../models/Note');

notesCtrl = {
    renderNoteForm: (req, res) => {
        res.render('notes/new-note');
    },
    createNewNote: async (req, res) => {
        const { title, description } = req.body;
        const newNote = new Note({ title, description });
        await newNote.save();
        res.send('new note');
    },
    renderNotes: async (req, res) => {
        const notes = await Note.find().lean();
        res.render('notes/all-notes', { notes });
    },
    renderEditForm: (req, res) => {
        res.send('render edit form');
    },
    updateNote: (req, res) => {
        res.send('update note');
    },
    deleteNote: (req, res) => {
        res.send('deleting note');
    },
}

module.exports = notesCtrl;