import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.css';
import './style/app.css';
import App from './app';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();