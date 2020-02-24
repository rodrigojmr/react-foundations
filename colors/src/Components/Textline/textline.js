import React from 'react';
import ReactDOM, { render } from 'react-dom';

class Textline extends React.Component {
    render() {
        return (
            <div>
                <h1>Qual é a cor?</h1>
                <h2>A cor é: {this.props.cor}</h2>
            </div>
        );
    }
}

export default Textline;