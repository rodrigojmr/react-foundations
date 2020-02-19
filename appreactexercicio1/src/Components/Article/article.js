import React from 'react';
import './article';

class Article extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.summary}</p>
                    <a href={this.props.src}></a>
                </div>
                <div>
                    <img src={this.props.src}></img>
                </div>
            </div>
        )
    }
}