// Importação do React
import React from 'react';

// Componente
const Formulario = ({aoDigitar, pessoa, pessoaSelecionada, cadastrar, alterar, remover, cancelar}) => {

    // Render
    return(
        <React.Fragment>
            <form>
                <input type='text'   name='nome'    onChange={aoDigitar} value={pessoa.nome}   placeholder='Nome'   className='form-control' />
                <input type='number' name='idade'   onChange={aoDigitar} value={pessoa.idade}  placeholder='Idade'  className='form-control' />
                <input type='text'   name='cidade'  onChange={aoDigitar} value={pessoa.cidade} placeholder='Cidade' className='form-control' />
                
                {
                    !pessoaSelecionada
                    ?
                    <input type='button' onClick={cadastrar} value='Cadastrar' className='btn btn-primary' />
                    :
                    <div>
                        <input type='button' onClick={alterar}  value='Alterar'   className='btn btn-primary' />
                        <input type='button' onClick={remover}  value='Remover'   className='btn btn-primary' />
                        <input type='button' onClick={cancelar} value='Cancelar'  className='btn btn-primary' />   
                    </div>
                }
            </form>
        </React.Fragment>
    );
}

// Exportar componente
export default Formulario;