// Importações
import React, { useState } from 'react';

// Função para determinar o signo do zodíaco com base na data
const obterSigno = (data) => {
    const mes = data.getMonth() + 1; // getMonth() retorna 0-11
    const dia = data.getDate();

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return 'Áries';
    if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return 'Touro';
    if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return 'Gêmeos';
    if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return 'Câncer';
    if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return 'Leão';
    if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return 'Virgem';
    if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return 'Libra';
    if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return 'Escorpião';
    if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return 'Sagitário';
    if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return 'Capricórnio';
    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return 'Aquário';
    if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return 'Peixes';
    
    return 'Data inválida';
};

// Componente principal
const Exercicio08 = () => {
    // Estado para armazenar a data de nascimento e o signo
    const [dataNascimento, setDataNascimento] = useState('');
    const [signo, setSigno] = useState('');

    // Função para lidar com a mudança no input de data
    const handleChange = (e) => {
        setDataNascimento(e.target.value);
    };

    // Função para calcular o signo ao enviar o formulário
    const calcularSigno = (e) => {
        e.preventDefault();
        const data = new Date(dataNascimento);
        // Verifica se a data é válida
        if (isNaN(data.getTime())) {
            setSigno('Data inválida');
        } else {
            setSigno(obterSigno(data));
        }
    };

    return (
        <div style={{ width: '40%', margin: '30px auto', textAlign: 'center' }}>
            <h2>Calculador de Signo</h2>
            <form onSubmit={calcularSigno}>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Data de Nascimento:
                        <input
                            type="date"
                            value={dataNascimento}
                            onChange={handleChange}
                            required
                            style={{ marginLeft: '10px' }}
                        />
                    </label>
                </div>
                <button type="submit" style={{ padding: '10px 20px' }} className='btn btn-success'>
                    Calcular Signo
                </button>
            </form>
            {signo && <p>Seu signo é: {signo}</p>}
        </div>
    );
};

// Exportar
export default Exercicio08;
