import React,{Component} from 'react';
import './banner.scss'

class Banner extends Component{
    render(){
        return(
            <div className="banner-inner">
                <i class={"fas fa-" + this.props.icon}></i>
                <h1 className="banner-title">{this.props.title}</h1>
                <p className="banner-subtitle">{this.props.text}</p>
            </div>
        )
    }
}

export default Banner;