import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const NoteActions = {
    loadNotes() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_NOTED_REQUEST
        });

        api.listNote()
            .then(({body}) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_NOTES_SUCCESS,
                    notes: body
            }))
            .catch(err => AppDispatcher.dispatch({
                type: Constants.LOAD_NOTES_FAIL,
                error: err
            }))
    },

    createNote(note) {
        api.createNote(note)
            .then(() => this.loadNotes())
            .catch(err => console.log(err));
    },

    deleteNote(noteID) {
        api.deleteNote(noteID)
            .then(() => this.loadNotes())
            .catch((err) => console.log(err));
    },

    updateNote(noteID, data) {
        api.updateNote(noteID, data)
            .then(()=> this.loadNotes())
            .catch((err) => console.log(err))
    }
};

export default NoteActions;