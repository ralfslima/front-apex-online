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

app.delete('/produto/:codigo', (req, res)=>{

    // Extrair o código da url
    let codigo = req.params.codigo;

    // Localizar a posição do produto no vetor
    let posicaoVetor = vetor.findIndex(produto => {
        return produto.codigo == codigo;
    });

    // Status e remoção
    if(posicaoVetor == -1){
        res.status(404);
    }else{
        vetor.splice(posicaoVetor,1);
        res.status(200);
    }
    
    // Evitar loop infinito
    res.end();
});


// Servidor
app.listen(8080);