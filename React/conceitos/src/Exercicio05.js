// Importações
import React, {useState} from 'react';

// Componente
const Exercicio03 = () => {

    // UseState
    const [valor, setValor] = useState(0);
    const [conversao, setConversao] = useState(0);
    const [valorConvertido, setValorConvertido] = useState(0);

    // Função para realizar o cadastro
    const calcular = () => {

        // Estrutura de escolha
        switch(conversao){
            case 0:
                setValorConvertido(valor / 5.50);
            break;

            case 1:
                setValorConvertido(valor * 5.50);
            break;
            
            case 2:
                setValorConvertido(valor / 6.50);
            break;
            
            case 3:
                setValorConvertido(valor * 6.50);
            break;
        }
        
    }

    // Render
    return(
        <React.Fragment>

            <form style={{width:'30%', margin:'30px auto', textAlign:'center'}}>
                <input className='form-control' onChange={e => setValor(parseFloat(e.target.value))} style={{marginBottom:'10px'}} type='text' placeholder='Informe o valor' />
                
                <select className='form-control' style={{marginBottom:'10px'}} onChange={e => {setConversao(parseInt(e.target.value))}}>
                    <option value='0'>Real para Dólar</option>
                    <option value='1'>Dólar para Real</option>
                    <option value='2'>Real para Euro</option>
                    <option value='3'>Euro para Real</option>
                </select>
                
                <input className='btn btn-secondary' type='button' value='Calcular' onClick={calcular} />
            </form>

            <h1 style={{textAlign:'center'}}>Valor convertido: {valorConvertido.toFixed(2)}</h1>
            
        </React.Fragment>
    );

}

// Exportar
export default Exercicio03;