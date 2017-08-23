import React from 'react';

import {Note} from './Note.jsx';

import Masonry from 'react-masonry-component';

import './NotesGrid.less';

export class NotesGrid extends React.Component {
    render() {
        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };
        return (
            <Masonry
                className='NotesGrid'
                options={masonryOptions}
            >
                {
                    this.props.notes.map(note =>
                        <Note
                            key={note.id}
                            title={note.title}
                            onDelete={this.props.onNoteDelete.bind(null, note)}
                            color={note.color}
                            date={`${note.createdAt.slice(11,19)} ${note.createdAt.slice(0,10)}`}
                        >
                            {note.text}
                        </Note>
                    )
                }

            </Masonry>
        );
    }
}