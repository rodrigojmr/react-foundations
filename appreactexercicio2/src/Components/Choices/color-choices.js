import React from 'react';
import './choices.css';

class Choice extends React.Component {
    render() {
        return (
            <div className={"choice" + ' ' + this.props.classCor}>
                <p>{this.props.texto}</p>
            </div>
        );
    }
}

export default Choice;