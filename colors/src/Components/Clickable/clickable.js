import React from 'react';
import ReactDOM from 'react-dom';
import Textline from '../Textline/textline';
import './clickable.scss';

class Clickable extends React.Component {

    constructor(Props) {
        super(Props);
        this.handleClickEvent = this.handleClickEvent.bind(this);
        this.state = {
            nome: 'valor',
            maturidade: 'inicial'
        }
    }

    cor = "red";

    handleClickEvent(){
        alert(this.cor);
        this.cor = "yellow";
        alert(this.cor);
    }

    render() {
        return  (
            <div className="which-color-text">
                <p>{this.state.valor}</p>
                <Textline cor={this.cor}></Textline>
                <input id="bt" type="button" onClick={this.handleClickEvent}></input>;
            </div>
        )
    }
}

export default Clickable;