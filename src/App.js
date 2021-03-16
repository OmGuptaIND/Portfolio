import React from 'react';
import './App.css';
import { Redirect, Route } from 'react-router-dom';

//Components
import Home from './Components/Home/Home';
import Archive from './Components/Archive/Archive';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path='/archive' exact component={Archive} />
      <Route path='*'>
        <Redirect to = '/' />
      </Route>
    </div>
  );
}

export default App;
