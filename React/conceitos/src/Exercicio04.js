// Importações
import React, {useState} from 'react';

// Componente
const Exercicio04 = () => {

    // UseState
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);

    // Render
    return(
        <React.Fragment>

            {/* Formulário */}
            <form style={{width:'30%', margin:'30px auto', textAlign:'center'}}>
                <input className='form-control' onChange={e => {setNumero1(parseInt(e.target.value))}} style={{marginBottom:'10px'}} type='text' placeholder='Informe um nome' />
                <input className='form-control' onChange={e => {setNumero2(parseInt(e.target.value))}} style={{marginBottom:'10px'}} type='text' placeholder='Informe um nome' />
            </form>
       
            {/* Cálculo */}
            <p>{numero1 == numero2 ? numero1+numero2 : numero1*numero2}</p>

        </React.Fragment>
    );

}

// Exportar
export default Exercicio04;