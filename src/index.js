import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap/app.css';
import App from './component/App';
import Home from './component/Home';
import Pages from './component/Pages';
<<<<<<< HEAD
import A from './component/A';
=======

>>>>>>> 8471d8751c70d3baa0be974442c856af7f787e2f
//import {BrowserRouter,Route} from 'react-router-dom';

import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'

<<<<<<< HEAD
ReactDOM.render(
<Router history={browserHistory}>
   <Route path='/' component={App}>
    <IndexRoute component={Home} />
     <Route path='/pages' component={Pages} />
     <Route path='/A' component={A} />
   </Route>
 </Router>
, document.getElementById('root'));
=======
ReactDOM.render( <
  Router history = {
    browserHistory
  } >
  <
  Route path = '/'
  component = {
    App
  } >
  <
  IndexRoute component = {
    Home
  }
  /> <
  Route path = 'pages'
  component = {
    Pages
  }
  /> <
  /Route> <
  /Router>, document.getElementById('root'));
>>>>>>> 8471d8751c70d3baa0be974442c856af7f787e2f
