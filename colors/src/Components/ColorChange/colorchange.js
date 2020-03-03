import React,{Component} from 'react';
import ColorButton from '../Choices/color-choices.js';
import './colorchange.scss';

class ColorChanger extends Component{
    constructor(Props) {
        super(Props);
        this.state = {
            color: this.props.initial
        }
        this.rainbowColors = ['White', 'Red', 'Blue', 'Green', 'Orange', 'Pink', 'Purple'];
        this.updateWhite = this.updateWhite.bind(this);
        this.updateRed = this.updateRed.bind(this);
        this.updateBlack = this.updateBlack.bind(this);
    }

    updateWhite() {
        this.setState({color: 'white'});
    }

    updateRed() {  
        this.setState({color: 'red'});
    }

    updateBlack() {
        this.setState({color: 'black'});}

    render() {
        return(
            <div>
                <div class={"color-square" + ' ' + "color-square" + '--' + this.state.color}>
                    <p>{this.state.color}</p>
                </div>
                <div id="colorButtons">
                    <ColorButton color="white" callbackEvent={this.updateWhite}></ColorButton>
                    <ColorButton color="red" callbackEvent={this.updateRed}></ColorButton>
                    <ColorButton color="black" callbackEvent={this.updateBlack}></ColorButton>
                </div>

                {this.rainbowColors.map(color => (
                        <p>{color}</p>
                    )                
                )}
            </div>
        )
    }
}

export default ColorChanger;