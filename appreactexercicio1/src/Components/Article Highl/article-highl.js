import React from 'react';
import './article-highl.css';

class ArticleHighl extends React.Component {
    render(){
        return (
            <div>
            <p>{this.props.position}</p>
            <img src={this.props.src}></img>
            <h2>{this.props.title}</h2>
            <p>{this.props.blurb}</p>
            </div>
        )
    }
}