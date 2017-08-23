import React from 'react';

import NotesStore from '../stores/NotesStore';
import NotesActions from '../actions/NotesActions';

import {NotesEditor} from "./NotesEditor.jsx";
import {NotesGrid} from "./NotesGrid.jsx";

import './App.less';


function getStateFromFlux() {
    return {
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    }
}

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = getStateFromFlux();
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleNoteDelete = this.handleNoteDelete.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
        NotesActions.loadNotes();
    }

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange)
    }

    handleNoteAdd(data) {
        NotesActions.createNote(data);
    }

    handleNoteDelete(note) {
        NotesActions.deleteNote(note.id);
    }

    render() {
        return (
            <div className="App">
                <h2 className="App_header">Notes App</h2>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
                <NotesEditor onNoteAdd={this.handleNoteAdd}/>
            </div>
        );
    }

    _onChange() {
        this.setState(getStateFromFlux());
    }
}