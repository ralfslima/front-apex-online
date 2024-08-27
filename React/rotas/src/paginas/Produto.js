// Importar o pacote React
import React from 'react';

// Importar o useParams
import { useParams } from 'react-router-dom';

// Componente
const Produto = () => {
    const { id } = useParams();

    return(<h1>Página Produto - {id}</h1>);
}

// Exportar
export default Produto;