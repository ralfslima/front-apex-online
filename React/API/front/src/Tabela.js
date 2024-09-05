// Importação do React
import React from 'react';

// Componente
const Tabela = ({vetor, selecionar}) => {

    // Render
    return(
        <React.Fragment>
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
                            <td><button className='btn btn-primary' onClick={() => {selecionar(indice)}}>Selecionar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    );
}

// Exportar componente
export default Tabela;