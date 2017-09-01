import React from 'react';

import './Navbar.less';

import {FaHome, FaUserSecret} from 'react-icons/lib/fa/';


export class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Navbar__container'>
                <div className='Navbar__navigation'>
                    <div>
                        <FaHome size='30' color='grey'/>
                    </div>
                    <div>Category</div>
                    <div>About</div>
                </div>
                <div className='Navbar__authentication'>
                    <div>
                        <FaUserSecret size='30' color='grey'/>
                    </div>
                    <button onClick={this.props.onAuthStart}>
                        Sign In
                    </button>
                </div>
            </div>
        );
    }
}
