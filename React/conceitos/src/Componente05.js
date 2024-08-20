// Importar módulos
import React, {useState} from 'react';

// Componente
const Componente05 = () => {

    // UseState
    const [nomes, setNomes] = useState(['Ralf', 'Larissa', 'Juliana']);

    // Render
    return(
        <React.Fragment>
            <h1>Lista de nomes:</h1>

            <ul>
                {
                    nomes.map(
                        (n, i) => ( <li key={i}>{i} - {n}</li> )
                    )
                }
            </ul>
        </React.Fragment>
    );

}

// Exportar componente
export default Componente05;