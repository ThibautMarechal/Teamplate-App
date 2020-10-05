import React from 'react';
import { Route, Redirect } from 'react-router';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Access from './pages/Access';
import Programme from './pages/Programme';
import Concours from './pages/Concours';
import Nous from './pages/Nous';
import Photos from './pages/Photos';
import { useLogged } from './Authorization';
import Equipe from './pages/Equipe';

export default () => {
  const logged = useLogged();
  return (
    <div>
      <NavMenu />
      <Route exact path='/' component={Home} />
      {logged ? (
        <>
          <Route exact path='/acces' component={Access} />
          <Route path='/equipe' component={Equipe} />
          <Route path='/nous' component={Nous} />
          <Route path='/photos' component={Photos} />
          <Route exact path='/programme' component={Programme} />
          <Route exact path='/concours' component={Concours} />
        </>
      ): (
        <Redirect to="/" />
      )}
    </div>
  )
};
