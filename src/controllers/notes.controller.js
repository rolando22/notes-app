notesCtrl = {
    renderNoteForm: (req, res) => {
        res.render('notes/new-note');
    },
    createNewNote: (req, res) => {
        console.log(req.body);
        res.send('new note');
    },
    renderNotes: (req, res) => {
        res.send('render notes');
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