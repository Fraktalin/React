import React from 'react';
import ReactDOM from 'react-dom';
import App from './header';
import Content from './main';
import Footer from './footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Content/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
