export default class Login {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
    
    userSession() {
        const user = localStorage.getItem('user');

        if (user && user === 'admin@admin.com') {
            document.getElementById("login").classList.add('d-none');
            document.getElementById("pagina").classList.remove('d-none');
        } else {
            document.getElementById("pagina").classList.add('d-none');
            document.getElementById("login").classList.remove('d-none');
        }
    }

    login() {
        const user = document.getElementsByName('user')[0].value;
        const password = document.getElementsByName('senha')[0].value;

        if (user === 'admin@admin.com' && password === '1234') {
            localStorage.setItem('user', user);
            document.getElementById("login").classList.add('d-none');
            document.getElementById("pagina").classList.remove('d-none');
        } else {
            alert('Usuário ou senha inválido!');
        }
    }

    logout() {
        localStorage.removeItem('user');
        this.clearForm();
        this.userSession();
    }

    clearForm() {
        document.getElementById('user').innerHTML = '';
        document.getElementById('senha').innerHTML = '';
    }
}

    
