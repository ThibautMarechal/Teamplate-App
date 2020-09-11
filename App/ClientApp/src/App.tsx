import React from 'react';
import { Route, Redirect } from 'react-router';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Access from './pages/Access';
import Programme from './pages/Programme';
import Concours from './pages/Concours';
import { useLogged } from './Authorization';

export default () => {
  const logged = useLogged();
  return (
    <div>
      <NavMenu />
      <Route exact path='/' component={Home} />
      {logged ? (
        <>
          <Route exact path='/acces' component={Access} />
          <Route exact path='/programme' component={Programme} />
          <Route exact path='/concours' component={Concours} />
        </>
      ): (
        <Redirect to="/" />
      )}
    </div>
  )
};
