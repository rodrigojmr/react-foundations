import React from 'react';
import './PortfolioList.css';
import ModuleGen from '../ModuleGen/ModuleGen';

function PortfolioList(Props){
    return(
    <div>
        <h1>{Props.title}</h1>
        <section>
            <ModuleGen title="Livro 1" desc="Descrição 1"></ModuleGen>
            <ModuleGen title="Livro 2" desc="Descrição 2"></ModuleGen>
            <ModuleGen title="Livro 3" desc="Descrição 3"></ModuleGen>
        </section>
      </div>
        );
  }

  export default PortfolioList;