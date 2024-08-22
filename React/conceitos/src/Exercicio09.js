// Importações
import React, { useState } from 'react';

// Componente principal
const Exercicio09 = () => {
    
    // UseState
    const [cliente, setCliente] = useState({nome: '', cidade: '', email: '', telefone: ''});
    const [clientes, setClientes] = useState([]);

    // Função para lidar com mudanças nos inputs do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCliente((prevCliente) => ({...prevCliente, [name]: value}));
    };

    // Função de cadastro
    const handleSubmit = (e) => {
        // Adiciona o cliente à lista de clientes
        let vetorTemp = [...clientes];
        vetorTemp.push(cliente);
        setClientes(vetorTemp);

        // Limpa os campos do formulário
        setCliente({nome: '', cidade: '', email: '', telefone: ''});
    };

    // Função para remover um cliente da lista
    const handleRemove = (index) => {
        let vetorTemp = [...clientes];
        vetorTemp.splice(index, 1);
        setClientes(vetorTemp);
    };

    return (
        <div style={{ width: '80%', margin: '30px auto' }}>
            <h2>Gerenciador de Clientes</h2>
            <form>
                <input type="text"  className='form-control' placeholder='Nome' name="nome" value={cliente.nome} onChange={handleChange} required style={{ marginBottom:'10px' }} />
                <input type="text"  className='form-control' placeholder='Cidade' name="cidade" value={cliente.cidade} onChange={handleChange} required style={{ marginBottom:'10px' }} />
                <input type="email" className='form-control' placeholder='E-mail' name="email" value={cliente.email} onChange={handleChange} required style={{ marginBottom:'10px' }} />
                <input type="text"  className='form-control' placeholder='Telefone' name="telefone" value={cliente.telefone} onChange={handleChange} required style={{ marginBottom:'10px' }}/>
                <button type="button" onClick={handleSubmit} className='btn btn-primary'>Adicionar Cliente</button>
            </form>

            {/* Tabela para exibir clientes */}
            <h3 style={{marginTop:'30px'}}>Lista de Clientes</h3>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cidade</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.length > 0 ? (
                        clientes.map((item, index) => (
                            <tr key={index}>
                                <td>{item.nome}</td>
                                <td>{item.cidade}</td>
                                <td>{item.email}</td>
                                <td>{item.telefone}</td>
                                <td>
                                    <button onClick={() => handleRemove(index)} style={{ padding: '5px 10px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}>
                                        Remover
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" style={{ textAlign: 'center', padding: '8px' }}>Nenhum cliente cadastrado</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

// Exportar
export default Exercicio09;
