import React, { Component } from 'react';


import fetch from 'isomorphic-fetch'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
        fetch('http://127.0.0.1:5000/api/v1/pages')
        .then((response) => response.json())
        </div>
      </div>
    );
  }
}

export default App;
