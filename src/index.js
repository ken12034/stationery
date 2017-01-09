import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Repos from './components/Repos';
import About from './components/About';
import User from './components/User';
import Contacts from './components/Contacts';
import Me from './components/Me';
require('../res/css/test.sass');
require('../res/css/read.sass');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/repos/:name" component={Repos} />
      <Route path="/read" component={About} />
      <Route path="/user" component={User} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/me" component={Me} />
    </Route>
  </Router>,
  document.getElementById('app'));
