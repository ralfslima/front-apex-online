// Importações
import React, {useReducer} from 'react';

// Componente
const Componente10 = () => {

    // Função para incrementar ou decrementar
    const funcao = (state, acao) => {

        if(acao == 'incrementar'){
            return state + 1;
        }else{
            return state -1;
        }

    }

    // useReducer
    const [contador, executarFuncao] = useReducer(funcao, 0);

    // Render
    return(
        <React.Fragment>
            <h1>{contador}</h1>
            <button onClick={() => {executarFuncao('incrementar')}}>Incrementar</button>
            <button onClick={() => {executarFuncao('decrementar')}}>Decrementar</button>
        </React.Fragment>
    );

}

// Exportar o componente
export default Componente10;