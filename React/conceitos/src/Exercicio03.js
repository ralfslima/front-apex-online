// Importações
import React, {useState} from 'react';

// Componente
const Exercicio03 = () => {

    // UseState
    const [nome, setNome] = useState('');
    const [vetor, setVetor] = useState([]);

    // Função para realizar o cadastro
    const cadastrar = () => {

        // Cópia do vetor
        let vetorTemp = [...vetor];

        // Adicionar o nome
        vetorTemp.push(nome);

        // Atualizar vetor
        setVetor(vetorTemp);

        // Limpar nome
        setNome('');
        
    }

    // Render
    return(
        <React.Fragment>

            <form style={{width:'30%', margin:'30px auto', textAlign:'center'}}>
                <input className='form-control' onChange={e => setNome(e.target.value)} style={{marginBottom:'10px'}} type='text' value={nome} placeholder='Informe um nome' />
                <input className='btn btn-secondary' type='button' value='Cadastrar' onClick={cadastrar} />
            </form>

            <ul>
                {vetor.map((nome, indice) => (<li key={indice}>{nome}</li>))}
            </ul>

        </React.Fragment>
    );

}

// Exportar
export default Exercicio03;