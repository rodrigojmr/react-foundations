import React from 'react';
import './HelloWorld';

function HelloWorld(Props){
    return(
        <p>Hello World! - {Props.desc}</p>
    );
}

export default HelloWorld;