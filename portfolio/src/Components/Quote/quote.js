import React from 'react';
import './quote.css';

class Quote extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.text}</p>
                <p>{this.props.author}</p>
            </div>
        )
    }
}