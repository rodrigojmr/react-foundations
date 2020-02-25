import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './Components/Home/home';
import C1 from './Components/C1/1';
import C2 from './Components/C2/2';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <nav>
            <ul>
              <li><Link to="/"><p>Home</p></Link></li>
              <li><Link to="/c1"><p>C1</p></Link></li>
              <li><Link to="/c2"><p>C2</p></Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/c1">
              <C1></C1>
            </Route>
            <Route path="/c2">
              <C2></C2>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
        </div>

  );
}

export default App;
