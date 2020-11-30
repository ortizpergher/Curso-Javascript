export default class Card {
    constructor(titulo, texto, editando = null) {
        this.titulo = titulo;
        this.texto = texto;
        this.editando = editando;
    }

    salvar() {
    
        let error = false;
    
        this.resetError();
    
        if (this.titulo.value.length < 1 || this.titulo.value.length > 20) {
            this.titulo.classList.add('error');
            error = true;
        }
        if (this.texto.value.length < 1) {
            this.texto.classList.add('error');
            error = true;
        }
        if (error) {
            document.getElementsByClassName('alert-danger')[0].classList.remove('d-none');
        } else {
            console.log(this.editando);
            if (this.editando) {
                this.editCard();
            } else{
                this.newCard();
            }

            this.resetError();
            this.clearForm();

        }
    }

    resetError() {
        this.titulo.classList.remove('error');
        this.texto.classList.remove('error');
        document.getElementsByClassName('alert-danger')[0].classList.add('d-none');
        document.getElementsByClassName('alert-success')[0].classList.add('d-none');
    }

    newCard() {
        document.getElementsByClassName('noCards')[0].classList.add('d-none');

        document.getElementsByClassName('cards-row')[0].innerHTML += this.addCard();
    
        this.atribuirEventos();
    }

    clearForm() {
        this.titulo.value = '';
        this.texto.value = '';
    
        document.getElementsByClassName('alert-success')[0].classList.remove('d-none');
    }

    addCard() {
        let card = (`<div class="col-lg-3 col-sm-6">
                        <div class="card bg-light mb-3">
                            <div class="card-header"> 
                                <h1> ${this.titulo.value} </h1>  
                                <div class="icons"> 
                                    <span class="fas fa-edit btn-edit"> </span>  
                                    <span class="fas fa-trash btn-remove"> </span> 
                                </div> 
                            </div>  
                            <div class="card-body"> 
                                <p class="card-text"> ${this.texto.value}</p> 
                            </div > 
                            <div class="card-footer bg-light border-0 text-right"> Autor </div> 
                        </div>
                    </div>`);
    
        return card;
    }

    atribuirEventos() {

        for(this.botao of document.getElementsByClassName('btn-remove')){
            this.atribuirEventoRemover(this.botao);
        }
    
        for(this.botao of document.getElementsByClassName('btn-edit')){
            this.atribuirEventoEditar(this.botao);   
        }
    }
    
    atribuirEventoRemover(botao) {
    
        botao.addEventListener('click', function(event) {
            event.preventDefault();
            this.parentNode.parentNode.parentNode.parentNode.remove();
    
            if (document.querySelectorAll('.cards-row .col-lg-3').length === 0) {
                document.getElementsByClassName('noCards')[0].classList.remove('d-none');
            }
        });
    }
    
    atribuirEventoEditar(botao){
    
        botao.addEventListener('click', function(event){
            event.preventDefault();

            document.getElementsByClassName('list')[0].classList.toggle('d-none');
            document.getElementsByClassName('register')[0].classList.toggle('d-none');

            this.editando = this.parentNode.parentNode.parentNode.parentNode;
    
            titulo.value = this.editando.getElementsByClassName('card-header')[0].getElementsByTagName('h1')[0].innerText.trim();
            texto.value = this.editando.getElementsByClassName('card-body')[0].getElementsByTagName('p')[0].innerText.trim();
        })
    }

    editCard() {
        this.editando.getElementsByClassName('card-header')[0].getElementsByTagName('h1')[0].innerText = this.titulo.value;
        this.editando.getElementsByClassName('card-body')[0].getElementsByTagName('p')[0].innerText = this.texto.value;
        this.editando = null;
    }
}