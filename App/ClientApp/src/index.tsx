import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import { AuthorizationProvider } from './Authorization';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <HashRouter>
    <AuthorizationProvider>
      <App />
    </AuthorizationProvider>
  </HashRouter>,
  rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
