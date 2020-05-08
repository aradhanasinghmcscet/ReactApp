import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './stores/store';
import './index.css';
import App from './App';
// import serviceWorker from './serviceWorker';
ReactDOM.render(
 <Provider store={configureStore()}>
  <App />
  <div id="rootContainer"></div>
 </Provider>,
 document.getElementById('root')
);
// serviceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//  serviceWorker.unregister();
