
import "./App.css";
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

import {Categories} from './components/Categories'
import {Category} from './components/Category'

function App() {
  return (
  <Router>
    <div className="App">
      <h1>Meal App</h1>
    
    <Switch>
        <Route exact path="/" component={Categories} />
        <Route path="/:id" component={Category} />
    </Switch>
    </div>
  </Router>
  
  )
}

export default App;
