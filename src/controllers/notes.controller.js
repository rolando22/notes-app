const Note = require('../models/Note');

const notesCtrl = {
    renderNoteForm: (req, res) => {
        res.render('notes/new-note');
    },
    createNewNote: async (req, res) => {
        const { title, description } = req.body;
        const newNote = new Note({ title, description });
        newNote.user = req.user._id;
        await newNote.save();
        res.redirect('/notes');
    },
    renderNotes: async (req, res) => {
        const notes = await Note.find({ user: req.user._id }).sort({ createdAt: 'desc' }).lean();
        res.render('notes/all-notes', { notes });
    },
    renderEditForm: async (req, res) => {
        const note = await Note.findById(req.params.id).lean();
        if (note.user !== req.user._id) return res.redirect('/notes', { text: 'Not authorized.' });
        res.render('notes/edit-note', { note });
    },
    updateNote: async (req, res) => {
        const { title, description } = req.body;
        await Note.findByIdAndUpdate(req.params.id, { title, description });
        res.redirect('/notes');
    },
    deleteNote: async (req, res) => {
        await Note.findByIdAndDelete(req.params.id);
        res.redirect('/notes');
    },
}

module.exports = notesCtrl;
