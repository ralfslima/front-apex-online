// Importarções
import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

// Importar componentes
//import Componente01 from './Componente01';
//import Componente02 from './Componente02';
// import Componente03 from './Componente03';
import Componente04 from './Componente04';

// 1º Render - SEM JSX
//const elemento = React.createElement('h1', {}, 'Hello World!');
//ReactDOM.render(elemento, document.getElementById('root'));

// 2º Render - COM JSX (Render utilizado até a versão 17)
//ReactDOM.render(<h1>Hello React</h1>, document.getElementById('root'));

// 3º Render - COM JSX (Render utilizado a partir da versão 18)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Componente04/>);