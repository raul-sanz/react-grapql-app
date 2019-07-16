import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard'
import CreateAuthor from './components/authorComponents/CreateAuthor'
import UpdateAuthor from './components/authorComponents/UpdateAuthor'
import viewAuthor from './components/authorComponents/ViewAuthor'
import CreateQuote from './components/quoteComponents/CreateQuote'
import UpdateQuote from './components/quoteComponents/UpdateQuote'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/author/create' component={CreateAuthor} />
          <Route exact path='/author/update/:id' component={UpdateAuthor} />
          <Route exact path='/quote/create' component={CreateQuote} />
          <Route exact path='/quote/update/:id' component={UpdateQuote} />
          <Route exact path='/view/author/:id' component={viewAuthor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
