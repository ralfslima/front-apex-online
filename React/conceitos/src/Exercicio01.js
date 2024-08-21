// Importações
import React, {useState} from 'react';

// Componente
const Exercicio01 = () => {

    // UseState
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [media, setMedia] = useState(0);
    const [situacao, setSituacao] = useState('');

    // Função para realizar a média e a situação
    const calcular = () => {
        
        // Média
        let media = (nota1+nota2)/2;
        setMedia(media);

        // Situação
        let situacao = media >= 7 ? 'Aprovado' : 'Reprovado';
        setSituacao(situacao);

    }

    // Render
    return(
        <React.Fragment>
            
            {/* {
                situacao == '' 
                ? 
                '' 
                : 
               <div>
                 <p>Média: {media}</p>
                 <p>Situação: {situacao}</p>
               </div>
            } */}

            <p>Média: {media}</p>
            <p>Situação: {situacao}</p>

            <form style={{width:'50%', margin:'0 auto', textAlign:'center'}}>
                <input style={{marginBottom:'10px'}} type='number' className='form-control' placeholder='Nota1' onChange={e => setNota1(parseFloat(e.target.value))} />
                <input style={{marginBottom:'10px'}} type='number' className='form-control' placeholder='Nota2' onChange={e => setNota2(parseFloat(e.target.value))} />      
                <input type='button' className='btn btn-primary' value='Calcular' onClick={calcular} />
            </form>
        </React.Fragment>
    );

}

// Exportar
export default Exercicio01;