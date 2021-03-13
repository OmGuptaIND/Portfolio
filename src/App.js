import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//Components
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
    </div>
  );
}

export default App;
