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
          <Route path='/authorcreate' component={CreateAuthor} />
          <Route path='/authorupdate/:id' component={UpdateAuthor} />
          <Route path='/quotecreate' component={CreateQuote} />
          <Route path='/quoteupdate/:id' component={UpdateQuote} />
          <Route path='/viewauthor/:id' component={viewAuthor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
