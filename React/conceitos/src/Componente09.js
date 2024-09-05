// Importação
import {useRef, useEffect} from 'react';

// Componente
const Componente09 = () => {

    // useRef
    const inputRef = useRef();

    // useEffect
    useEffect(() => {
        inputRef.current.focus();
    });

    // Função
    const funcao = (e) => {
        // Obter o valor digitado
        let valor = e.target.value;

        // Estrutura de escolha
        switch(valor){
            case 'azul':
            inputRef.current.style.backgroundColor = 'blue';
            break;

            case 'verde':
            inputRef.current.style.backgroundColor = 'green';
            break;

            case 'vermelho':
            inputRef.current.style.backgroundColor = 'red';
            break;

            default:
            inputRef.current.style.backgroundColor = 'white';
        }
    }

    // Render
    return(
        <input type='text' ref={inputRef} onChange={funcao} />
    );

}

// Exportar o componente
export default Componente09;