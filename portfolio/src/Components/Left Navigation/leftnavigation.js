import React,{Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Banner from '../Banner/banner';
import './leftnavigation.scss';

class LeftNavigation extends Component {
    render() {
        return(
            <div className="LeftNavigation">
                <Banner icon="film" title="Rodrigo" text="Um Portfólio"></Banner>
                <ul>
                    <li className="btn btn--navigation">
                        <Link to="/"><p>Gallery</p></Link>
                    </li>
                    <li className="btn btn--navigation">
                        <Link to="/Timeline"><p>Tineline</p></Link>
                    </li>
                    <li className="btn btn--navigation">
                        <Link to="/about"><p>About</p></Link>
                    </li>
                    <li className="btn btn--navigation">
                        <Link to="/contact"><p>Contact</p></Link>
                    </li>
                    </ul>
                </div>
        )
    }
}

export default LeftNavigation;