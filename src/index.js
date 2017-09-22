import React from 'react';
import ReactDOM from 'react-dom';
import  './bootstrap/app.css';
import App from './component/App';
import Home from './component/Home';
import Pages from './component/Pages';

import {BrowserRouter,Route,Link,IndexRoute} from 'react-router-dom';

//import { Router, Route, IndexRoute, browserHistory } from 'react-router'

ReactDOM.render(
<BrowserRouter>
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='pages' component={Pages} />
    </Route>
 </BrowserRouter>
, document.getElementById('root'));
