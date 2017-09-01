import React from 'react';

import {FaClose, FaEdit} from 'react-icons/lib/fa/';

import './Note.less';

export class Note extends React.Component {
    render() {
        const style = {backgroundColor: this.props.color};
        return (
            <div className='Note' style={style}>
                <FaClose className='Note__del-icon' onClick={this.props.onDelete} />
                <FaEdit className="Note__edit-icon" onClick={this.props.onUpdate} />
                {
                    this.props.title
                        ? <h4 className='Note__title'>{this.props.title}</h4>
                        : null
                }
                <i>{this.props.date}</i>
                {/*this.props.children > text of node Note*/}
                <div className='Note__text'>{this.props.children}</div>
            </div>
        );
    };
}