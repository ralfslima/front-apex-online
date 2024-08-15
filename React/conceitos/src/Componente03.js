// Importação
import React, {useState} from 'react';

// Componente
const Componente03 = () => {

    // State
    const [texto, setTexto] = useState('');
    
    // Retorno
    return(
        <React.Fragment>
            {/* <h1>{texto}</h1> */}
            <h1>{texto === '' ? 'Digite algo...' : texto}</h1>
            <input type='text' onChange={ e => setTexto(e.target.value) }/>
        </React.Fragment>
    );

}

// Exportar componente
export default Componente03;