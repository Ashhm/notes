import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const NoteActions = {
    loadNotes() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_NOTES_REQUEST
        });

        api.listNote()
            .then(({data}) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_NOTES_SUCCESS,
                    notes: data
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

    deleteNotes(noteID) {
        api.deleteNotes(noteID)
            .then(() => this.loadNotes())
            .catch((err) => console.log(err));
    }
};

export default NoteActions;