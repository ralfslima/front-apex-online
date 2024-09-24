// Importar o Express
const express = require('express');

// Criar o APP (responsável pelo gerenciamento de rotas)
const app = express();

// Formato de dados (JSON)
app.use(express.json());

// Vetor para armazenar produtos
let vetor = [];

// Variável código
let codigo = 1;

// Rota para cadastrar produtos
app.post('/produto', (req, res) => {

    // Criar característica/parâmetro código
    req.body.codigo = codigo;

    // Incrementar o código
    codigo+=1;

    // Cadastrar produto no vetor
    vetor.push(req.body);

    // Retorno
    res.status(200).json(req.body);

});

// Rota para listar todos os produtos
app.get('/produto', (req, res) => {
    res.status(200).json(vetor);
});

// Rota para remover produtos
app.delete('/produto/:codigo', (req, res) => {

    // Obter o código via parâmetro
    const codigoProduto = parseInt(req.params.codigo);

    // Localizar o produto através do código (posição)
    const posicaoProduto = vetor.findIndex(obj => {
        return obj.codigo === codigoProduto
    });

    // Remover produto do vetor
    vetor.splice(posicaoProduto, 1);

    // Retorno
    res.status(200).json();

});



// Servidor
app.listen(8080);