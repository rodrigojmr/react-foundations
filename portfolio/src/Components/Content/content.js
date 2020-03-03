import React,{Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import About from '../About/about';
import Contact from '../Contact/contact';
import Gallery from '../Gallery/gallery';
import Timeline from '../Timeline/timeline';

import './Content.scss';

class Content extends Component{
    render(){
        return(
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Gallery />
                    </Route>
                    <Route path="/timeline">
                        <Timeline />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Content