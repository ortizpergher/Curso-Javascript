const placa = document.getElementById('placa');
const cor = document.getElementById('cor');
const modelo = document.getElementById('modelo');
const ano = document.getElementById('ano');
const placaSaida = document.getElementById('placaSaida');
const tempo = document.getElementById('tempo')

const vagas = {
    a1: null,
    a2: null,
    b1: null,
    b2: null,
    c1: null,
    c2: null
}

const historico = [];

function entrada(event) {
    event.preventDefault();

    let error = false;

    resetError(placa, cor, modelo, ano, placaSaida, tempo);

    if (placa.value.length != 6) {
        placa.classList.add('error');
        error = true;
    }    
    if (cor.value.length < 1) {
        cor.classList.add('error');
        error = true;
    }
    if (modelo.value.length < 2 || modelo.value.length > 15) {
        modelo.classList.add('error');
        error = true;
    }
    if (ano.value < 1900 || ano.value > new Date().getFullYear()) {
        ano.classList.add('error');
        error = true;
    }
    if (error) {
        document.getElementsByClassName('alert-danger')[0].classList.remove('d-none');
    } else {        
        entradaDeCarro({ 'placa': placa.value, 'cor': cor.value, 'modelo': modelo.value, 'ano': parseInt(ano.value) });
        resetError(placa, cor, modelo, ano, placaSaida, tempo);
        limparCampos();        
    }
}

function saida(event) {
    event.preventDefault();

    let error = false;

    resetError(placa, cor, modelo, ano, placaSaida, tempo);

    if (placaSaida.value.length != 6) {
        placaSaida.classList.add('error');
        error = true;
    }    
    if (tempo.value <= 0 ) {
        ano.classList.add('error');
        error = true;
    }
    if (error) {
        document.getElementsByClassName('alert-danger')[0].classList.remove('d-none');
    } else {        
        saidaDeCarro(placaSaida.value, parseInt(tempo.value));
        resetError(placa, cor, modelo, ano, placaSaida, tempo);
        limparCampos();        
    }
}

function resetError(placa, cor, modelo, ano, placaSaida, tempo) {
    placa.classList.remove('error');
    cor.classList.remove('error');
    modelo.classList.remove('error');
    ano.classList.remove('error');
    placaSaida.classList.remove('error');
    tempo.classList.remove('error')
    document.getElementsByClassName('alert-danger')[0].classList.add('d-none');
    document.getElementsByClassName('alert-success')[0].classList.add('d-none');
}

function limparCampos(){
    placa.value = '';
    cor.value = '';
    modelo.value = '';
    ano.value = '';
    placaSaida.value = '';
    tempo.value = '';
}

carro1 = { placa: 'xiz123', cor: 'branca', modelo: 'i30', ano: 2016 };
carro2 = { placa: 'xbb125', cor: 'preta', modelo: 'A4', ano: 2014 };
carro3 = { placa: 'xzz123', cor: 'prata', modelo: 'Fiat 147', ano: 1985 };
carro4 = { placa: 'iii123', cor: 'azul', modelo: 'Uno', ano: 2001 };
carro5 = { placa: 'ibb123', cor: 'prata', modelo: 'Gol', ano: 2009 };
carro6 = { placa: 'iaa123', cor: 'preta', modelo: 'i30', ano: 2012 };
carro7 = { placa: 'yui159', cor: 'prata', modelo: 'Tempra', ano: 1990 };
carro8 = { placa: 'iab456', cor: 'preta', modelo: 'Tipo', ano: 1995 };

entradaDeCarro(carro1);
entradaDeCarro(carro2);
entradaDeCarro(carro3);
saidaDeCarro('xbb125', 1);
entradaDeCarro(carro4);
entradaDeCarro(carro5);
entradaDeCarro(carro6);
entradaDeCarro(carro7);
entradaDeCarro(carro8);

// posicaoEstacionamento();

saidaDeCarro('ibb123', 2);

// posicaoEstacionamento();

saidaDeCarro('xiz123', 3);
entradaDeCarro(carro5);

saidaDeCarro('ibb123', 2)

saidaDeCarro('yui159', 4)

function entradaDeCarro(carro) {
    let estacionado = false;
    for (const vaga in vagas) {
        if (vagas[vaga] === null) {
            document.getElementsByClassName(vaga)[0].innerHTML += addCarro();
            document.getElementsByClassName(vaga)[0].firstChild.remove();
            vagas[vaga] = carro;
            estacionado = true;
            break;
        }
    }
    if (!estacionado) {
        alert(`O estacionamento está cheio, não foi possível estacionar o veiculo placa: ${carro.placa}!`)
    }
}

function addCarro(){
    return carro = (`<p class="card-text text-center">${placa.value}</p>`);
}

function saidaDeCarro(placa, tempo){
    for (const vaga in vagas) {
        if (vagas[vaga] !== null && vagas[vaga].placa === placa) {
            var valorTicket = gerarTicket(vaga, tempo);
            console.log(`Valor total do ticket R$ ${valorTicket}`);
            registrarSaidaCarro(vaga, valorTicket);
            vagas[vaga] = null;            
            break;
        }       
    }
}

function registrarSaidaCarro(vaga, valorTicket){
    let placa = vagas[vaga].placa;
    let carroEncontrado = false;

    for (i in historico) {
        if (historico[i].placa === placa){
            historico[i].valorGasto += valorTicket;
            carroEncontrado = true;
        } 
    }

    if(!carroEncontrado) {
        historico.push({'placa': placa, 'valorGasto': valorTicket});
    }

    ordenarHistorico();
}

function ordenarHistorico(){
    historico.sort(function (x, y) {
        if (x.valorGasto > y.valorGasto) {
            return -1;
        }
        if (x.valorGasto < y.valorGasto){
            return 1;
        }

        return 0;
    })
}

// Função posicaoEstacionamento foi criada para listar todos os carros estacionados
function posicaoEstacionamento(){
    for (const vaga in vagas) {
        console.log(vagas[vaga])
    }
}

function gerarTicket(vaga, tempo){
    let ano = vagas[vaga].ano;
    let placa = vagas[vaga].placa;
    let cor = vagas[vaga].cor;
    let desconto = 0;

    let valorTicket = tempo * 100;

    valorTicket = calcularDescontoPorAno(ano, valorTicket);
    
    desconto = calcularDescontoPorCor(cor, tempo);
    
    valorTicket -= desconto;
    
    const descontoHistorico =  aplicarDescontoPorHistorico(placa);

    if(descontoHistorico != false && descontoHistorico < 3){
        console.log('Cliente especial');
    }

    valorTicket = descontoHistorico ? valorTicket / 2 : valorTicket;

    return valorTicket;
}

function calcularDescontoPorAno(ano, valorTicket){
    switch (true) {
        case (ano > 2015):
            break;
        case (ano >= 2010):
            valorTicket *= 0.85;
            break;
        case (ano >= 2000):
            valorTicket *= 0.8;
            break;
        default:
            valorTicket *= 0.7;
            break;
    }

    return valorTicket;
}

function calcularDescontoPorCor(cor, tempo) {
    switch (cor) {
        case 'azul':
            return tempo * 10;
            break;
        case 'branco':
            return tempo * 15;
            break
        case 'preta':
            return tempo * 20;
            break
        default:
            return 0;
    }
}

function aplicarDescontoPorHistorico(placa){
    for(i in historico){
        if (historico[i].placa === placa ) {
            return i; 
        }
    }

    return false;
}


// Informar caso não haja mais vagas
// Qual carro está na vaga X
// Em qual vaga está o carro com placa X
// Em quais vagas estão os carros de modelos X
// Em quais vagas estão os carros de cor X

pesquisarPorVaga('a1')

function pesquisarPorVaga(vaga){
    if (vagas[vaga]) {
        console.log(`Na vaga ${vaga}, está estacionado o carro placa: ${vagas[vaga].placa},  modelo: ${vagas[vaga].modelo}, cor: ${vagas[vaga].cor}.`);
    } else {
        console.log(`Não existe carro na vaga: ${vaga}`)
    }
}

pesquisarPorPlaca('iii1234')
pesquisarPorPlaca('aaa1234')
function pesquisarPorPlaca(placa){
    let estacionado = false;
    for (const vaga in vagas) {
        if (vagas[vaga] !== null && vagas[vaga].placa === placa) {
            console.log(`O carro placa: ${placa} , esta na vaga: ${vaga}`);
            estacionado = true;
        } 
    }
    if (!estacionado) {
        console.log(`O carro placa: ${placa} , não foi encontrado!`);
    }
}

pesquisarPorModelo('i30')
pesquisarPorModelo('i4560')
function pesquisarPorModelo(modelo){
    let vagasPorModelo = '';
    for (const vaga in vagas) {
        if (vagas[vaga] !== null && vagas[vaga].modelo === modelo) {
            vagasPorModelo += ' ' + vaga;
        }       
    }
    if(!vagasPorModelo){
        console.log(`Não foi encontrado carro do modelo ${modelo} estacionado!`)
    } else {
        console.log(`O carro do modelo ${modelo} esta na(s) vaga(s):${vagasPorModelo}`);
    }
}

pesquisarPorCor('Preta')
pesquisarPorCor('Prata')
pesquisarPorCor('Vermelha')
function pesquisarPorCor(cor){
    let vagasPorCor = '';
    for (const vaga in vagas) {
        if (vagas[vaga] !== null && vagas[vaga].cor.toUpperCase() === cor.toUpperCase()) {
            vagasPorCor += ' ' + vaga;
        }       
    }
    if(vagasPorCor === ''){
        console.log(`Não foi encontrado carro da cor ${cor} estacionado!`);
    } else {
        console.log(`O carro da cor ${cor} esta na(s) vaga(s):${vagasPorCor}`);
    }
}

buscarVagasPorChaveValor('modelo', 'i30');

function buscarVagasPorChaveValor(chave, valor){

    const vagasEncontradas = [];

    for (vaga in vagas) {
        if (vagas[vaga] && vagas[vaga][chave] === valor){
            vagasEncontradas.push(vaga);
        }
    }

    console.log(`Encontramos as vagas ${vagasEncontradas.join(', ')} para a chave ${chave} e o valor ${valor}`);
}

posicaoEstacionamento();

console.log('Impressao historico do estacionamento')
for (i in historico) {    
    console.log(historico[i])
}