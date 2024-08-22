// Importações
import React, { useState } from 'react';

// Componente
const Exercicio06 = () => {
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    // Função para validar a senha
    const validarSenha = (senha) => {
        // Expressões regulares para validar os critérios
        const minCaracteres = /.{8,}/;
        const letraMinuscula = /[a-z]/;
        const letraMaiuscula = /[A-Z]/;
        const numero = /[0-9]/;
        const especial = /[@#$%_\-*]/;

        // Verificar se a senha atende a todos os critérios
        if (
            minCaracteres.test(senha) &&
            letraMinuscula.test(senha) &&
            letraMaiuscula.test(senha) &&
            numero.test(senha) &&
            especial.test(senha)
        ) {
            return 'Senha válida.';
        } else {
            return 'Senha inválida.';
        }
    };

    // Função para lidar com mudanças no input de senha
    const eventoTeclado = (e) => {
        const novaSenha = e.target.value;
        setSenha(novaSenha);
        setMensagem(validarSenha(novaSenha));
    };

    return (
        <div style={{ width: '40%', margin: '30px auto', textAlign: 'center' }}>
            <h2>Crie uma Nova Senha</h2>
            <input
                type='password'
                value={senha}
                onChange={eventoTeclado}
                placeholder='Digite sua senha'
                style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
            />
            <p>{mensagem}</p>
        </div>
    );
};

// Exportar
export default Exercicio06;
