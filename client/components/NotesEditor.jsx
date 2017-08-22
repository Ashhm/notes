import React from 'react';

import './NoteEditor.less';

export class NotesEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            color: '#FFFFFF'
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    handleTextChange(e) {
        this.setState({text: e.target.value});
    }

    handleTitleChange(e) {
        this.setState({title: e.target.value});
    }

    handleNoteAdd() {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);
        this.setState({
            title: '',
            text: '',
            color: '#FFFFFF'
        });
    }

    render() {
        return (
            <div className="NoteEditor">
                <input
                    type="text"
                    className="NoteEditor___title"
                    placeholder="Enter title"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    placeholder="Enter note text"
                    rows="5"
                    className="NoteEditor__text"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div>
                    <button
                        className="NoteEditor__button"
                        disabled={!this.state.text}
                        onClick={this.handleNoteAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}