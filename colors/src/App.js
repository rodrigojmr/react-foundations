import React from 'react';
import './App.css';
import Text from './Components/Text/Text';
import Choice from './Components/Choices/color-choices'
import Clickable from './Components/Clickable/clickable';

class App extends React.Component {
  render(){
    return (
        <div className="container">
          <Text texto="Cor"></Text>
          {/* <p className="which-color-text">Qual é a cor?</p> */}
          <Clickable></Clickable>
          <div className="flex">
            <Choice classCor="yellow" texto="Amarela"></Choice>
            <Choice classCor="blue" texto="azul"></Choice>
            <Choice classCor="pink" texto="rosa"></Choice>
          </div>
      </div>
    );
  }
}


// class App extends React.Component {
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <HelloWorld desc="2"></HelloWorld> */}
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
