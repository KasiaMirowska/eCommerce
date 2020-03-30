import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch} from 'react-router-dom';
import HatsPage from './pages/hatspage/HatsPage';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
     </div>
  );
}

export default App;
