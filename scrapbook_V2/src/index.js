import Card from './classes/card';

const btnNew = document.getElementsByClassName('fa-plus-circle')[0];
const btnLeft = document.getElementsByClassName('fa-arrow-left')[0];

const btnAdd = document.getElementById('btnAddCard');

const inputSearch = document.getElementsByClassName('search')[0];

const titulo = document.getElementById('titulo');
const texto = document.getElementById('texto');
let editando = null;

btnNew.addEventListener('click', (event) => {
    event.preventDefault();

    trocarTela();
});

btnLeft.addEventListener('click', (event) => {
    event.preventDefault();

    trocarTela();
});

function trocarTela() {
    document.getElementsByClassName('list')[0].classList.toggle('d-none');
    document.getElementsByClassName('register')[0].classList.toggle('d-none');

    document.getElementsByClassName('alert-danger')[0].classList.add('d-none');
    document.getElementsByClassName('alert-success')[0].classList.add('d-none');
}

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();

    const card = new Card(titulo, texto, editando);

    card.salvar();
});

inputSearch.addEventListener('keyup', (event) => {

    const cards = document.getElementsByClassName('card');

    for (this.card of cards) {

        console.log(this.card);

        let tituloCard = this.card.getElementsByClassName('card-header')[0].getElementsByTagName('h1')[0].innerHTML;
        let textoCard = this.card.getElementsByClassName('card-body')[0].getElementsByTagName('p')[0].innerHTML;
        let textoPesquisa = event.target.value;     

        if (!tituloCard.toUpperCase().includes(textoPesquisa.toUpperCase()) && !textoCard.toUpperCase().includes(textoPesquisa.toUpperCase())) {
            this.card.parentNode.classList.add('d-none')
        } else {
            this.card.parentNode.classList.remove('d-none')
        };
    }
})