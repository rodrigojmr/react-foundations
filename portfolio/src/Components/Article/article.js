import React from 'react';
import './article';

class Article extends React.Component {
    render() {
        return (
            <div>
                <div>
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