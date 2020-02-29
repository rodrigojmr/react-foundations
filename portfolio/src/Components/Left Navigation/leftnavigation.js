import React,{Component} from 'react';
import Banner from '../Banner/banner';
import Navigation from '../Navigation/navigation';
import './leftnavigation.scss';

class LeftNavigation extends Component {
    render() {
        return(
            <div className="LeftNavigation">
                <Banner icon="film" title="Rodrigo" text="Um Portfólio"></Banner>
                <Navigation></Navigation>
            </div>
        )
    }
}

export default LeftNavigation;