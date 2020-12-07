import express, { response } from 'express';

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


app.listen(3333);

