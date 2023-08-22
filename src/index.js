import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CrudApp from '../src/CrudApp';
import server from '../src/server';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

