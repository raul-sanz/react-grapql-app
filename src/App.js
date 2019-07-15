import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Dashboard} />
        </Switch>
          
        
      </div>
    </Router>
  );
}

export default App;
