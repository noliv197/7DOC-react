import React from 'react';
import ReactDOM from 'react-dom/client';
import CSSGlobal from './CSSGlobal';
import './index.css';
import HomePage from './pages/Homepage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CSSGlobal/>
    <HomePage/>
  </React.StrictMode>
);

