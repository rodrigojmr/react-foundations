import React from 'react';
import './choices.scss';

class ColorButton extends React.Component {
    render() {
        return (
            <div className="colorButtonContainer">
                <input id={"bt" + this.props.color} onClick={this.props.callbackEvent} type="button" value={this.props.color}></input>
                
            {/* <div className={"choice" + ' ' + this.props.classCor}>
                <p>{this.props.texto}</p>
            </div> */}
            </div>


        );
    }
}

export default ColorButton;