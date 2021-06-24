import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import sort from './Sorting';
import filter from './Filter';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );


new sort(document.querySelector("thead"));
new filter(document.querySelector("thead"));