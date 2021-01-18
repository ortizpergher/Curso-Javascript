import express, { request, response } from 'express';

import Pessoa from './classes/pessoa';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET -> BUSCAR INFORMAÇÃO
/*
app.get('/', (request, response) => {
    return response.send('Olá');
});

app.get('/pessoa', (request, response) => {
    return response.json({
        'nome': 'Ortiz',
        'idade': 31
    });
});
*/
// Router Param
/*
app.get('/pessoa/:id', (request, response) => {

    const { id } = request.params;

    console.log(id);
    return response.send('Ok');
});

// Query Param
app.get('/turmas', (request, response) => {
    console.log(request.query.page);
    return response.send('Ok')
});
*/

app.get('/calculadora/:operacao', (request, response) => {

    const { operacao } = request.params;
    const { valorA, valorB } = request.query;
    //const valorB = request.query.valorB;
    let result = null;

    switch (operacao) {
        case 'somar':
            result = parseInt(valorA) + parseInt(valorB);
            break;
        case 'subtrair':
            result = parseInt(valorA) - parseInt(valorB);
            break;
        case 'multiplicar':
            result = parseInt(valorA) * parseInt(valorB);
            break;
        case 'dividir':
            result = parseInt(valorA) / parseInt(valorB);
            break;    
        default:
            result = 'operador inválido';
            break;
    }
    return response.send(result.toString());
});

let contador = 0;

app.get('/contador/', (request, response) => {

    contador += 1;
    if (contador > 9) {
        contador = 0;
        return response.send('Chegou à 10');
    } 
    return response.send(contador.toString());

});

app.get('/numeral/:valor', (request, response) => {

    const { valor } = request.params;
    const operacao = request.query.operacao;

    let result = 0;

    switch(operacao) {
        case 'anterior':
            result = valor - 1;
            break;
        case 'proximo':
            result = parseInt(valor) + 1;
            break;
        default:
            result = 'Operador inválido';
            break;
    }
    return response.send(result.toString());
});

app.get('/inverter-string/:valor', (request, response) => {

    const { valor } = request.params;

    const novoValor = valor.split('').reverse().join('');
    return response.send(novoValor);
});

// 5 - Criar uma rota chamada remover-vogais, essa rota deverá deverá ter uma query param chamada valor. 
// Esse valor recebido deverá ser salvo em um array, e toda vez que a rota for chamada, deverá salvar o 
// valor nesse mesmo array. Antes de salvar o valor/string no array, deverá ser removido todas as vogais, 
// deixando apenas as consoantes na string. Sempre que a rota for chamada, deverá ser exibido em forma 
// de json o array contendo todas as strings.

const removerVogais = [];

app.get('/remover-vogais/:valor', (request, response) => {

    const { valor } = request.params;

    const novaString = valor.replace(/[aeiouà-ú]/gi, '');
    removerVogais.push(novaString);

    return response.json(novaString);
});

app.get('/remover-vogais', (request, response) => {
    return response.json(removerVogais);
});

const pessoas = [];
const nomesInvertidos = [];

app.get('/adicionar-pessoa', (request, response) => {

    const { nome, idade } = request.query;

    const pessoa = new Pessoa(nome, idade, pessoas.length + 1);

    nomesInvertidos.push(pessoa.inverterNome(nome));
    pessoas.push(pessoa);

    return response.json(pessoa);
});

app.get('/exibir-pessoa/:id', (request, response) => {
    const { id } = request.params;
    const pessoa = pessoas.find(pessoa => pessoa.id === parseInt(id));

    if (pessoa) {
        return response.json(pessoa);
    }

    return response.status(404).json({
        mensagem: 'Usuário não encontrado'
    });
});

app.get('/exibir-pessoas', (request, response) => {
    return response.json(pessoas);
});

app.get('/remover-pessoa/:id', (request, response) => {
    const { id } = request.params;

    const pessoa = pessoas.find(pessoa => pessoa.id === parseInt(id));

    if (pessoa) {
        pessoas.splice(pessoa, 1);
        return response.status(200).json({
            mensagem: 'Usuário deletado'
        });        
    } else {
        return response.status(404).json({
            mensagem: 'Usuário não encontrado'
        });
    }    
});

app.get('/inverter-nomes-pessoas', (request, response) => {
    return response.json(nomesInvertidos);
});



app.listen(3333);

