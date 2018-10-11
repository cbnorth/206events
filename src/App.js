import React, { Component } from 'react';
// import logo from './logo.svg';
import './app.scss';

import Nav from './components/nav/Nav.js';
import Sticky from 'react-sticky-el';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Header</p>
          <Sticky>
            <Nav />
          </Sticky>
        </header>
        <main>
          <div className="placeholder">Content blow the header</div>
        </main>
      </div>
    );
  }
}

export default App;
