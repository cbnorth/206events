import React, { Component } from 'react';
// import logo from './logo.svg';
import './nav.scss';

class Nav extends Component {
  render() {
    return (
        <nav className="navigation">
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
  }
}

export default Nav;