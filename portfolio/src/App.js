import React from 'react';
import LeftNavigation from './Components/Left Navigation/leftnavigation';
import Content from './Components/Content/content';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
    return(
        <div className="App">
            <Router>
            <LeftNavigation></LeftNavigation>
            <Content></Content>
            </Router>
        </div>
    )
}   

export default App;