import React, { Component } from 'react';

import { Link } from 'react-router'


class App extends Component {
  render() {
    return (
        <div classNameName= ''>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" >Cattalog</a>
                    </div>
                    <ul className="nav navbar-nav">

                        <li className="active"> <Link to={{ pathname: '/' }} >Babel Coder Wiki </Link>  </li>

                        <li>    <Link to={{ pathname: '/pages' }} > All pages </Link>   </li>

                        <li>    <Link to={{ pathname: '' }} > about </Link>   </li>
                    </ul>
                </div>
            </nav>

           {this.props.children}
         </div>
    );
  }
}

export default App;
