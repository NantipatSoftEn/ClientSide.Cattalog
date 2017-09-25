import React, { Component } from 'react';

import Home from './Home';
import Pages from './Pages';
import fetch from 'isomorphic-fetch'

class App extends Component {
  render() {
    return (
        <div>
           <header>Navbar</header>
           {this.props.children}
         </div>
    );
  }
}

export default App;
