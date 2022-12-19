import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
    ,
  </React.StrictMode>,
);
