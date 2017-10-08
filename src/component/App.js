import React, { Component } from 'react';

import { Link } from 'react-router'


class App extends Component {
  render() {
    return (
        <div className=''>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" >PSU Cattalog</a>
                    </div>
                    <ul className="nav navbar-nav">

                        <li> <Link to={{ pathname: '/' }} >Home</Link>  </li>

                        <li>    <Link to={{ pathname: '/pages' }} > Show </Link>   </li>

                        <li>    <Link to={{ pathname: '/A' }} > about </Link>   </li>
                    </ul>
                </div>
            </nav>

           {this.props.children}
         </div>
    );
  }
}

export default App;
