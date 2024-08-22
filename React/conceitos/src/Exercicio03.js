// Importações
import React, {useState} from 'react';

// Componente
const Exercicio03 = () => {

    // Render
    return(
        <React.Fragment>

            <form style={{width:'30%', margin:'30px auto', textAlign:'center'}}>
                <input className='form-control' style={{marginBottom:'10px'}} type='text' placeholder='Informe um nome' />
                <input className='btn btn-secondary' type='button' value='Cadastrar' />
            </form>

            <ul>

            </ul>

        </React.Fragment>
    );

}

// Exportar
export default Exercicio03;