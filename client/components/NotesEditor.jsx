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
            id: this.state.id,
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);
        this.setState({
            id: undefined,
            title: '',
            text: '',
            color: '#FFFFFF'
        });
    }

    //before mount we change state if props are exist. Edit function
    componentWillReceiveProps(nextProps) {
        if(nextProps.noteToEdit) this.setState(nextProps.noteToEdit);
    }

    //After successful update needs to change state in App. Edit function
    componentDidUpdate(){
        if (this.props.noteToEdit) this.props.onNoteUpdate();
    }

    render() {
        return (
            <div className="NoteEditor">
                <input
                    type="text"
                    className="NoteEditor__title"
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
                        {this.state.id ? "Edit" : "Add"}
                    </button>
                </div>
            </div>
        );
    }
}