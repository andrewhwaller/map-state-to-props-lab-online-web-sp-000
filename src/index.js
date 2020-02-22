import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'react-redux'
import manageUsers from './reducers/manageUsers'


let store = createStore(manageUsers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  // add imports and code
  <App />
  // add imports and code
  ,
  document.getElementById('root')
);
