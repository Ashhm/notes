import React from 'react';

import NotesStore from '../stores/NotesStore';
import NotesActions from '../actions/NotesActions';

import {NotesEditor} from "./NotesEditor.jsx";
import {NotesGrid} from "./NotesGrid.jsx";

import './App.less';
import NoteActions from "../actions/NotesActions";

function getStateFromFlux() {
    return {
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    }
}

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.state = getStateFromFlux();
    }

    componentWillMount() {
        NotesActions.loadNotes();
    }

    handleNoteAdd(data) {
        NotesActions.createNote(data);
    }

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange)
    }

    render() {
        return (
            <div className="App">
                <h2 className="App_header">Notes App</h2>
                <NotesGrid/>
                <NotesEditor onNoteAdd={this.handleNoteAdd}/>
            </div>
        );
    }

    _onChange(){
        this.setState(getStateFromFlux());
    }
}