import React from 'react';
import {NotesEditor} from "./NotesEditor.jsx";
import {NotesGrid} from "./NotesGrid.jsx";

import './App.less';

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h2 className="App_header">Notes App</h2>
                <NotesGrid />
                <NotesEditor onNoteAdd={this.handleNoteAdd}/>
            </div>
        );
    }
}