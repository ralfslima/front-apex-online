// Importar o Express
const express = require('express');

// Criar app para gerenciar a API
const app = express();

// Especificar o tipo de dado que será recebido ou enviado
app.use(express.json());

// Vetor de produtos
let vetor = [];

// Código para incremento
let codigo = 1;

// Rota de teste
app.get('/', (req, res)=>{
    let obj = {
        'nome':'Lucas',
        'idade':35,
        'cidade':'São Paulo'
    }

    res.json(obj);
});

// Rotas para gerenciar produtos
app.post('/produto', (req, res)=>{

    // Objeto
    let obj = req.body;
    obj.codigo = codigo;

    // Incremento da variável código
    codigo+=1;

    // Cadastrar obj no vetor
    vetor.push(obj);

    // Retorno do objeto completo
    res.status(201).json(obj);

});

app.get('/produto', (req, res)=>{
    // Listar todos os produtos
    res.status(200).json(vetor);
});

// Servidor
app.listen(8080);