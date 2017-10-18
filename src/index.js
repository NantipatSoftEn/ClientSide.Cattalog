import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap/app.css';
import App from './component/App';
import Home from './package/Home';
import Pages from './package/Pages';
import Edit from './package/Edit';
import Delete from './package/Delete';

import Upload from './component/Upload';
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
     <Route path='/Edit/:id' component={Edit} />
     <Route path='/Delete/:id' component={Delete} />

     <Route path='/test' component={Upload} />
   </Route>
 </Router>
, document.getElementById('root'));
