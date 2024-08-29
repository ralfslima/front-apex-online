// Importações do React
import React, { useState, useEffect } from 'react';

// Importar AXIOS
import axios from 'axios';

// Importar CSS
import './Estilos.css';

// URL da API
const urlAPI = 'http://localhost:3000/pessoas';

// Componente
const App = () => {

    // useState
    const [vetor, setVetor] = useState([]);
    const [pessoaSelecionada, setPessoaSelecionada] = useState(false);

    // useEffect
    useEffect(() => { listar() }, []);

    // Método para listar todas as pessoas da API
    const listar = async () => {
        const requisicao = await axios.get(urlAPI);
        setVetor(requisicao.data);
        //console.log(requisicao.data[0].nome);
    }

    // Método para selecionar uma pessoa
    const selecionar = () => {
        setPessoaSelecionada(true);
    }

    // Método para cancelar
    const cancelar = () => {
        setPessoaSelecionada(false);
    }

    // Render
    return(
        <React.Fragment>
            {/* Formulário */}
            <form>
                <input type='text' name='nome'    placeholder='Nome'   className='form-control' />
                <input type='number' name='idade' placeholder='Idade'  className='form-control' />
                <input type='text' name='cidade'  placeholder='Cidade' className='form-control' />
                
                {
                    !pessoaSelecionada
                    ?
                    <input type='button' value='Cadastrar' className='btn btn-primary' />
                    :
                    <div>
                        <input type='button' value='Alterar'   className='btn btn-primary' />
                        <input type='button' value='Remover'   className='btn btn-primary' />
                        <input type='button' value='Cancelar'  className='btn btn-primary' onClick={cancelar} />   
                    </div>
                }
            </form>

            {/* Tabela */}
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Nome</td>
                        <td>Idade</td>
                        <td>Cidade</td>
                        <td>Selecionar</td>
                    </tr>
                </thead>

                <tbody>
                    {vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice + 1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.idade}</td>
                            <td>{obj.cidade}</td>
                            <td><button className='btn btn-primary' onClick={selecionar}>Selecionar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    );
}

// Exportar componente
export default App;