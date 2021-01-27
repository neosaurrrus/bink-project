
import "./App.css";
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

import {Categories} from './components/Categories'
import {Category} from './components/Category'
import { Recipe } from "./components/Recipe";

function App() {
  return (
  <Router>
    <div className="App">
      <h1>Meal App</h1>
    
    <Switch>
        <Route exact path="/" component={Categories} />
       
        {/* <Route path="/:id" component={Category} /> */}
        <Route exact path="/recipe" component={Recipe} />
    </Switch>
    </div>
  </Router>
  
  )
}

export default App;
