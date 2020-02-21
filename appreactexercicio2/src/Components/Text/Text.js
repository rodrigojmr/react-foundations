import React from 'react';
import ReactDOM from 'react-dom';
import './text.css'

class Text extends React.Component {
    render() {
        return (
            <div className="bloco">
                <p>{this.props.texto}</p>
            </div>
            
        );
    }
}

export default Text;