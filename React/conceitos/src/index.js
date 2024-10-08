// Importarções
import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

// Importar componentes
// import Componente01 from './Componente01';
// import Componente02 from './Componente02';
// import Componente03 from './Componente03';
// import Componente04 from './Componente04';
// import Componente05 from './Componente05';
// import Componente06 from './Componente06';
// import Componente07_pai from './Componente07_pai';
// import Componente08 from './Componente08';
// import Componente09 from './Componente09';
import Componente10 from './Componente10';
// import Exercicio01 from './Exercicio01';
// import Exercicio02 from './Exercicio02';
// import Exercicio03 from './Exercicio03';
// import Exercicio04 from './Exercicio04';
// import Exercicio05 from './Exercicio05';
// import Exercicio06 from './Exercicio06';
// import Exercicio07 from './Exercicio07';
// import Exercicio08 from './Exercicio08';
// import Exercicio09 from './Exercicio09';
// import Exercicio10 from './Exercicio10';

// 1º Render - SEM JSX
//const elemento = React.createElement('h1', {}, 'Hello World!');
//ReactDOM.render(elemento, document.getElementById('root'));

// 2º Render - COM JSX (Render utilizado até a versão 17)
//ReactDOM.render(<h1>Hello React</h1>, document.getElementById('root'));

// 3º Render - COM JSX (Render utilizado a partir da versão 18)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Componente10/>);