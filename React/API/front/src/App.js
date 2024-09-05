// Importações do React
import React, { useState, useEffect } from 'react';

// Importar AXIOS
import axios from 'axios';

// Importar CSS
import './Estilos.css';

// Importar componentes
import Tabela from './Tabela';
import Formulario from './Formulario';

// URL da API
const urlAPI = 'http://localhost:3000/pessoas';

// Componente
const App = () => {

    // useState
    const [vetor, setVetor] = useState([]);
    const [pessoaSelecionada, setPessoaSelecionada] = useState(false);
    const [pessoa, setPessoa] = useState({nome:'', idade:'', cidade:''});

    // useEffect
    useEffect(() => { listar() }, []);

    // Método para listar todas as pessoas da API
    const listar = async () => {
        const requisicao = await axios.get(urlAPI);
        setVetor(requisicao.data);
        //console.log(requisicao.data[0].nome);
    }

    // Método para selecionar uma pessoa
    const selecionar = (indice) => {
        setPessoa(vetor[indice]);
        setPessoaSelecionada(true);
    }

    // Método para cancelar
    const cancelar = () => {
        setPessoaSelecionada(false);
        setPessoa({nome:'', idade:'', cidade:''});
    }

    // Método para obter os valores digitados no formulário
    const aoDigitar = (e) => {
        const {name, value} = e.target;
        setPessoa({...pessoa, [name]:value});
    }

    // Método de cadastro
    const cadastrar = async () => {
        const requisicao = await axios.post(urlAPI, pessoa);
        setVetor([...vetor, requisicao.data]);
        cancelar();
    }

    // Método de alteração/edição
    const alterar = async () => {
        //const requisicao = await axios.put(urlAPI+'/'+pessoa.id, pessoa);
        const requisicao = await axios.put(`${urlAPI}/${pessoa.id}`, pessoa);
        
        // 1ª forma:
        // let copiaVetor = vetor;
        // let obterPosicao = vetor.findIndex(p => {return p.id === pessoa.id});
        // copiaVetor[obterPosicao] = requisicao.data;
        // setVetor(copiaVetor);

        // 2º forma:
        setVetor(vetor.map(p => (p.id === pessoa.id ? requisicao.data : p))); 

        cancelar();
    }

    // Método de remoção
    const remover = async () => {
        const requisicao = await axios.delete(`${urlAPI}/${pessoa.id}`);

        // 1ª forma:
        // let copiaVetor = vetor;
        // let obterPosicao = vetor.findIndex(p => {return p.id === pessoa.id});
        // copiaVetor.splice(obterPosicao, 1);
        // setVetor(copiaVetor);

        // 2º forma:
        setVetor(vetor.filter(p => (p.id != pessoa.id)));
    
        cancelar();
    }

    // Render
    return(
        <React.Fragment>
            <Formulario 
                aoDigitar={aoDigitar} 
                pessoa={pessoa} 
                pessoaSelecionada={pessoaSelecionada} 
                cadastrar={cadastrar} 
                alterar={alterar} 
                remover={remover} 
                cancelar={cancelar} />
            
            <Tabela vetor={vetor} selecionar={selecionar} />  
        </React.Fragment>
    );
}

// Exportar componente
export default App;