import React, { Component } from 'react';
import './header.scss';

import Sticky from 'react-sticky-el';
import Nav from '../Nav';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="logo"></div>
                <Sticky>
                    <Nav />
                </Sticky>
            </header>
        );
    }
}

//14, 18. 31, 75

export default Header;