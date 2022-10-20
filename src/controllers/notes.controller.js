notesCtrl = {
    renderNoteForm: (req, res) => {
        res.send('note add');
    },
    createNewNote: (req, res) => {
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