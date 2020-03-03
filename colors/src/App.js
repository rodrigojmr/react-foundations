import React from 'react';
import './App.css';
import Text from './Components/Text/Text';
import Choice from './Components/Choices/color-choices'
import Clickable from './Components/Clickable/clickable';
import ColorChanger from './Components/ColorChange/colorchange';

class App extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      images: []
    }
  }
  componentDidMount() {
    let API = 'http://jsonplaceholder.typicode.com/photos';
    fetch(API)
    .then(res => res.json())
    .then((data) => {
      this.setState({ images: data })
    })
    .catch(console.log)
  }

  render(){
    return (
    <div>
      {this.state.images.map(image => (
        <img src={image.url}></img>
      ))};
  </div>
  )
}}

// class App extends React.Component {
//   render(){
//     return (
//       <div className="app">
//         <ColorChanger initial="Teste"></ColorChanger>
//       </div>
//     );
//   }
// }


// class App extends React.Component {
//   render(){
//     return (
//         <div className="container">
//           <Text texto="Cor"></Text>
//           <Clickable></Clickable>
//           <div className="flex">
//             <Choice classCor="yellow" texto="Amarela"></Choice>
//             <Choice classCor="blue" texto="azul"></Choice>
//             <Choice classCor="pink" texto="rosa"></Choice>
//           </div>
//       </div>
//     );
//   }
// }


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
