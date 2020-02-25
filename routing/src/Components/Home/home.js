import React from 'react';

class Home extends React.Component {

    constructor(Props) {
        super(Props);
        this.state = {
            nome: 'valor',
            maturidade: 'novo'
        };
        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        this.setState({maturidade : 'maduro'});
    }

    render() {
        return(
            <div>
            <h1>Home</h1>
            <p>{this.state.maturidade}</p>
            <button onClick={this.updateState}>maduro</button>
            </div>
        )
    }
}

export default Home;