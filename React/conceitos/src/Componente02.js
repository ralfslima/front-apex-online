// Importar React
import React, {useState} from 'react';

// Componente
function Componente02(){

    // Criar state (variável reativa)
    const [texto, setTexto] = useState('Aprendendo State');

    // Função para alterar o texto
    const acao = () => {
        setTexto('Texto alterado com sucesso!');
    }

    // Retorno
    return(
        <React.Fragment>
            <p>{texto}</p>
            <button onClick={acao}>Clique aqui!</button>
        </React.Fragment>
    );

}

// Exportar o componente
export default Componente02;