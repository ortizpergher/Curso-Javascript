import Login from './classes/login';
import ValorTicket from './classes/valorTicket';

const btnPassword = document.getElementsByClassName('fa-eye-slash')[0];

const btnLogin = document.getElementsByClassName('btnLogin')[0];
const logout = document.getElementsByClassName('logout')[0];

const login = new Login(user, senha);

document.addEventListener('DOMContentLoaded', () => {
    login.userSession();
})

btnPassword.addEventListener('click', (event) => {
    event.preventDefault();

    showPassword();
});

function showPassword() {
    let senha = document.querySelector('#senha');
    if (senha.getAttribute('type') == 'password') {
        senha.setAttribute('type', 'text');
        document.getElementById("iconSenha").classList.remove('fa-eye');
        document.getElementById("iconSenha").classList.add('fa-eye-slash');
    } else {
        senha.setAttribute('type', 'password');
        document.getElementById("iconSenha").classList.remove('fa-eye-slash');
        document.getElementById("iconSenha").classList.add('fa-eye');
    }
};

btnLogin.addEventListener('click', (event) => {
    event.preventDefault();

    login.login();
});

logout.addEventListener('click', (event) => {
    event.preventDefault();

    login.logout();
});

const clock = document.getElementById('hour');

setInterval(function() {
    let now = new Date();
    clock.value = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() ;
}, 1000);

const categorias = document.getElementsByClassName('categoria')[0];

categorias.addEventListener('change', event => {
    event.preventDefault();

    const valorTicket = new ValorTicket();

    const valorPagar = document.getElementById('valor');

    valorPagar.value = valorTicket.calcularValorTicket();
})



