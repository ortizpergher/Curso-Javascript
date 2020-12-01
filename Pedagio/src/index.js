import Login from './classes/login';

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