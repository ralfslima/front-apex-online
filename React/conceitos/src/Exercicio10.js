// Importações
import React, { useState, useEffect } from 'react';

// Componente principal
const Exercicio10 = () => {
    // Estado para armazenar a data e hora atual
    const [dataHora, setDataHora] = useState(new Date());

    // Função para atualizar o estado com a data e hora atual
    const atualizarDataHora = () => {
        setDataHora(new Date());
    };

    // Utilizar useEffect para configurar o intervalo e limpar ao desmontar
    useEffect(() => {
        // Atualizar a data e hora imediatamente
        atualizarDataHora();

        // Configura o intervalo para atualizar a cada segundo
        const intervalo = setInterval(atualizarDataHora, 1000);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(intervalo);
    }, []);

    // Formata a data e hora
    const dia = dataHora.getDate();
    const mes = dataHora.getMonth() + 1; // getMonth() retorna 0-11
    const ano = dataHora.getFullYear();
    const hora = dataHora.getHours().toString().padStart(2, '0');
    const minuto = dataHora.getMinutes().toString().padStart(2, '0');
    const segundo = dataHora.getSeconds().toString().padStart(2, '0');

    return (
        <div style={{ width: '50%', margin: '30px auto', textAlign: 'center' }}>
            <h2>Data e Hora Atual</h2>
            <p><strong>Dia:</strong> {dia}</p>
            <p><strong>Mês:</strong> {mes}</p>
            <p><strong>Ano:</strong> {ano}</p>
            <p><strong>Hora:</strong> {hora}</p>
            <p><strong>Minuto:</strong> {minuto}</p>
            <p><strong>Segundo:</strong> {segundo}</p>
        </div>
    );
};

// Exportar
export default Exercicio10;
