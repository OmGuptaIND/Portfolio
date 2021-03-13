import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Components;
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Layout from './Partials/Layout';


ReactDOM.render(
  <React.StrictMode>
  <Router><Switch><Layout><App /></Layout></Switch></Router>
  </React.StrictMode>,
  document.getElementById('root')
);

