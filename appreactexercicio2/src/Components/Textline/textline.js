import React from 'react';
import ReactDOM, { render } from 'react-dom';

class Textline extends React.Component {
    render() {
        return (
            <div>
                <h2>A cor é : {this.props.cor}</h2>
            </div>
        );
    }
}

export default Textline;