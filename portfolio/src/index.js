import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PortfolioList from './Components/PortfolioList/PortfolioList';
import * as serviceWorker from './serviceWorker';
import App from './App'

ReactDOM.render(<PortfolioList title="test"/>, document.getElementById('root'));

ReactDOM.render(<App title="test"/>, document.getElementById('root2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
