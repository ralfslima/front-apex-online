// Importações
import React, {useState} from 'react';

// Componente
//function Componente04(){}
const Componente04 = () => {

    // States
    // const [nome, setNome] = useState('');
    // const [cidade, setCidade] = useState('');
    // const [idade, setIdade] = useState(0);
    const [pessoa, setPessoa] = useState({nome:'', cidade:'', idade:0});

    // Evento de teclado
    const teclado = (e) => {
        let nome = e.target.name;
        let valor = e.target.value;

        setPessoa({...pessoa, [nome]:valor});
    }

    // Render
    return(
        <form>
            <p>{JSON.stringify(pessoa)}</p>
            {/* <p> Nome:   {nome}   </p>
            <p> Cidade: {cidade} </p>
            <p> Idade:  {idade}  </p> */}
            <input type='text'   name='nome'   onChange={teclado} placeholder='Informe seu nome' />
            <input type='text'   name='cidade' onChange={teclado} placeholder='Informe sua cidade' />
            <input type='number' name='idade'  onChange={teclado} placeholder='Informe sua idade' />
        </form>
    );

}

// Exportar o componente
export default Componente04;