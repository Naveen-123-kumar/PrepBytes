import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Data from './UseContext/Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Data>
    <App />
    </Data>
  </React.StrictMode>
);


