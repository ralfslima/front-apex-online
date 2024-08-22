// Importações
import React, { useState } from 'react';

// Componente principal
const Exercicio07 = () => {

    // UseState
    const [produto, setProduto] = useState({nome: '', marca: '', valor: ''});
    const [produtos, setProdutos] = useState([]);

    // Função para enviar os dados dos inputs para o useState de produto
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto((prevProduto) => ({...prevProduto, [name]: value}));
    };

    // Função para efetuar o cadastro
    const cadastrar = (e) => {
        setProdutos((prevProdutos) => [...prevProdutos, produto]);
        setProduto({nome: '', marca: '', valor: ''});
    };

    return (
        <div style={{ width: '60%', margin: '30px auto' }}>
            <h2>Cadastro de Produtos</h2>
            <form>
                <input type="text"   placeholder='Nome do produto'  name="nome"  style={{marginBottom:'10px'}} value={produto.nome} onChange={handleChange} className='form-control' />
                <input type="text"   placeholder='Marca do produto' name="marca" style={{marginBottom:'10px'}} value={produto.marca} onChange={handleChange} className='form-control' />
                <input type="number" placeholder='Valor do produto' name="valor" style={{marginBottom:'10px'}} value={produto.valor} onChange={handleChange} className='form-control' />
                <button type="button" onClick={cadastrar} className='btn btn-primary'>Cadastrar</button>
            </form>

            {/* Tabela para exibir produtos */}
            <h3 style={{marginTop:'30px'}}>Lista de Produtos</h3>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.length > 0 ? (
                        produtos.map((item, index) => (
                            <tr key={index}>
                                <td>{item.nome}</td>
                                <td>{item.marca}</td>
                                <td>{item.valor}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" style={{ textAlign: 'center', padding: '8px' }}>Nenhum produto cadastrado</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

// Exportar
export default Exercicio07;
