import React from 'react';
import './ModuleGen.css';

function ModuleGen(Props){
    return(
    <div className="column">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </div>);
  }

  export default ModuleGen;