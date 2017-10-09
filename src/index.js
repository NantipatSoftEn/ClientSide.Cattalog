import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap/app.css';
import App from './component/App';
import Home from './component/Home';
import Pages from './component/Pages';
import Edit from './component/Edit';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'


ReactDOM.render(
<Router history={browserHistory}>
   <Route path='/' component={App}>
    <IndexRoute component={Home} />
     <Route path='/pages' component={Pages} />
     <Route path='/Edit' component={Edit} />
   </Route>
 </Router>
, document.getElementById('root'));
