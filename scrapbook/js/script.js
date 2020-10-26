const titulo = document.getElementById('titulo');
const texto = document.getElementById('texto');
let editando = null;

function trocarTela(e) {

    if (e) {
        e.preventDefault();    
    }    

    document.getElementsByClassName('list')[0].classList.toggle('d-none');
    document.getElementsByClassName('register')[0].classList.toggle('d-none');
    clearForm();
}

function salvar(e) {
    e.preventDefault();

    let error = false;

    resetError(titulo, texto);

    if (titulo.value.length < 1 || titulo.value.length > 20) {
        titulo.classList.add('error');
        error = true;
    }
    if (texto.value.length < 1) {
        texto.classList.add('error');
        error = true;
    }
    if (error) {
        document.getElementsByClassName('alert-danger')[0].classList.remove('d-none');
    } else {
        if (editando) {
            editCard();
        } else{
            newCard();
        }
        resetError(titulo, texto);

        document.getElementsByClassName('alert-success')[0].classList.remove('d-none');
        titulo.setAttribute('readonly', 'readonly');
        texto.setAttribute('readonly', 'readonly');
    }
}

function resetError(titulo, texto) {
    titulo.classList.remove('error');
    texto.classList.remove('error');
    document.getElementsByClassName('alert-danger')[0].classList.add('d-none');
    document.getElementsByClassName('alert-success')[0].classList.add('d-none');
}

function clearForm() {

    titulo.value = '';
    texto.value = '';
    titulo.removeAttribute('readonly', 'readonly');
    texto.removeAttribute('readonly', 'readonly');

    document.getElementsByClassName('alert-success')[0].classList.add('d-none');
    document.getElementsByClassName('btn-success')[0].classList.add('d-none');
    document.getElementsByClassName('btn-primary')[0].classList.remove('d-none');
}

function newCard() {
    document.getElementsByClassName('noCards')[0].classList.add('d-none');
    document.getElementsByClassName('btn-primary')[0].classList.add('d-none');
    document.getElementsByClassName('btn-success')[0].classList.remove('d-none');

    document.getElementsByClassName('cards-row')[0].innerHTML += addCard();

    atribuirEventos();
}

function addCard() {
    let card = (`<div class="col-lg-3 col-sm-6">
                    <div class="card bg-light mb-3">
                        <div class="card-header"> 
                            <h1> ${titulo.value} </h1>  
                            <div class="icons"> 
                                <span class="fas fa-edit btn-edit"> </span>  
                                <span class="fas fa-trash btn-remove"> </span> 
                            </div> 
                        </div>  
                        <div class="card-body"> 
                            <p class="card-text"> ${texto.value}</p> 
                        </div > 
                        <div class="card-footer bg-light border-0 text-right"> Autor </div> 
                    </div>
                </div>`);

    return card;
}

function atribuirEventos() {

    for(botao of document.getElementsByClassName('btn-remove')){
        atribuirEventoRemover(botao);
    }

    for(botao of document.getElementsByClassName('btn-edit')){
        atribuirEventoEditar(botao);   
    }
}

function atribuirEventoRemover(botao) {

    botao.addEventListener('click', function(event) {
        event.preventDefault();
        this.parentNode.parentNode.parentNode.parentNode.remove();

        if (document.querySelectorAll('.cards-row .col-lg-3').length === 0) {
            document.getElementsByClassName('noCards')[0].classList.remove('d-none');
        }
    });
}

function atribuirEventoEditar(botao){

    botao.addEventListener('click', function(event){
        event.preventDefault();

        trocarTela(event);
        editando = this.parentNode.parentNode.parentNode.parentNode;

        titulo.value = editando.getElementsByClassName('card-header')[0].getElementsByTagName('h1')[0].innerText.trim();
        texto.value = editando.getElementsByClassName('card-body')[0].getElementsByTagName('p')[0].innerText.trim();
    })
}

function editCard() {
    editando.getElementsByClassName('card-header')[0].getElementsByTagName('h1')[0].innerText = titulo.value;
    editando.getElementsByClassName('card-body')[0].getElementsByTagName('p')[0].innerText = texto.value;
    editando = null;
}

function pesquisar(e){
    //e.preventDefault();

    const cards = document.getElementsByClassName('card');

    for (card of cards) {

        if (!card.getElementsByClassName('card-header')[0].getElementsByTagName('h1')[0].innerText.toUpperCase().includes(e.target.value.toUpperCase())) {
            card.parentNode.classList.add('d-none')
        } else {
            card.parentNode.classList.remove('d-none')
        };
        
        if (!card.getElementsByClassName('card-body')[0].getElementsByTagName('p')[0].innerText.toUpperCase().includes(e.target.value.toUpperCase())) {
            card.parentNode.classList.add('d-none')
        } else {
            card.parentNode.classList.remove('d-none')
        };
    }
}