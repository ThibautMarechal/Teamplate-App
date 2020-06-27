import React from 'react';
import { Route } from 'react-router';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Access from './pages/Access';
import Programme from './pages/Programme';
import Concours from './pages/Concours';

export default () => (
  <div>
    <NavMenu />
    <Route exact path='/' component={Home} />
    <Route exact path='/acces' component={Access} />
    <Route exact path='/programme' component={Programme} />
    <Route exact path='/concours' component={Concours} />
  </div>
);
