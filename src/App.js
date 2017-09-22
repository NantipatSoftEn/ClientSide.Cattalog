import React, { Component } from 'react';
import logo from './logo.svg';


class App extends Component {
componentDidMount() {
   fetch('http://127.0.0.1:5000/api/v1/pages')
     .then((response) => response.json())
     .then((pages) => this.setState({ pages }))
 }
  render() {
    return (
      <div className="container">
          <div className="row">
            <div classname="col-md-6">.col-xs-6 .col-sm-4</div>
          </div>
      </div>
    );
  }
}

export default App;
