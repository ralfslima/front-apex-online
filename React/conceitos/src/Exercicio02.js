// Importações
import React, {useState} from 'react';

// Componente
const Exercicio02 = () => {

    // UseState
    const [numero, setNumero] = useState(0);
    const [tabuada, setTabuada] = useState([]);

    // Função para realizar a tabuada
    const calcular = () => {
        
        // Vetor de tabuada
        let vetorTabuada = [];

        // Laço de repetição
        for(let i=0; i<11; i++){
            vetorTabuada.push(`${numero} X ${i} = ${numero * i}`);
        }

        // Enviar o vetor para o state
        setTabuada(vetorTabuada);

    }

    // Render
    return(
        <React.Fragment>
            
            <form style={{width:'40%', margin:'30px auto', textAlign:'center'}}>
                <input type='number' style={{marginBottom:'10px'}} className='form-control' placeholder='Informe um número' onChange={e => setNumero(e.target.value)} />                    
                <input type='button' className='btn btn-success' value='Realizar tabuada' onClick={calcular} />
            </form>

            <ul>
                {tabuada.map((resultado, indice) => (
                    <li key={indice}>{resultado}</li>
                ))}
            </ul>

        </React.Fragment>
    );

}

// Exportar
export default Exercicio02;