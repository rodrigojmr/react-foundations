import React from 'react';
import './ModuleGen.css';

function ModuleGen(Props){
    return(
    <div className="column">
        <h1>{Props.title}</h1>
        <p>{Props.desc}</p>
    </div>);
  }

  export default ModuleGen;