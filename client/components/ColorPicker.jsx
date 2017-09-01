import React from 'react';

import './ColorPicker.less';

export class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const colors = ['#FFFFFF', '#80D8FF', '#FFFF8D', '#FF8A80', '#CCFF90', '#CFD8DC', '#FFD180'];

        return (
                <div className="Color__container">
                {
                    colors.map(color =>
                    <div
                        key={color}
                        /*switching color should check - witch color is current now in props*/
                        className= {
                            `Color__element ${this.props.color === color ? 'selected' : ''}`
                        }
                        style={{backgroundColor: color}}
                        onClick={this.props.onColorSelect.bind(null, color)}
                    >
                    </div>
                )}
                </div>
        );

    };
}