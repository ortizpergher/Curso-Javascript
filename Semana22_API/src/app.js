import axios from 'axios';

export default class App {
    constructor() {
        this.error = false;
        this.baseUrl = 'https://growdev-test-node.herokuapp.com';
    }

    userSession() {
        const username = localStorage.getItem('username');
        const user = localStorage.getItem('user');
        const uid = localStorage.getItem('uid');
        const token = localStorage.getItem('token');
    
        if (username) {
            this.getUsers();
            this.setUser(user);
            document.getElementsByClassName("createUser")[0].classList.add('d-none');
            document.getElementsByClassName("login")[0].classList.add('d-none');
            document.getElementsByClassName("page")[0].classList.remove('d-none');
        } else {
            document.getElementsByClassName("page")[0].classList.add('d-none');
            document.getElementsByClassName("login")[0].classList.add('d-none');
            document.getElementsByClassName("createUser")[0].classList.remove('d-none');
        }
    }

    addEventButton() {
        const btnCreate = document.getElementById('btnCreateAccount');

        btnCreateAccount.addEventListener('click', (event) => {
            event.preventDefault();
            this.validateNewUser();
        });

        const loginLink = document.getElementById('loginLink');

        loginLink.addEventListener('click', (event) => {
            event.preventDefault();

            document.getElementsByClassName('createUser')[0].classList.toggle('d-none');
            document.getElementsByClassName('login')[0].classList.toggle('d-none');
        });

        const registerLink = document.getElementById('registerLink');

        registerLink.addEventListener('click', (event) => {
            event.preventDefault();

            document.getElementsByClassName('createUser')[0].classList.toggle('d-none');
            document.getElementsByClassName('login')[0].classList.toggle('d-none');
        });

        const btnLogin = document.getElementsByClassName('btnLogin')[0];

        btnLogin.addEventListener('click', (event) => {
            event.preventDefault();

            this.validateLogin();
        });

        const logout = document.getElementsByClassName('logout')[0];

        logout.addEventListener('click', (event) => {
            event.preventDefault();

            localStorage.removeItem('username');
            localStorage.removeItem('uid');
            localStorage.removeItem('token');

            this.userSession();
        });

        const navAccount = document.getElementsByClassName('navAccount')[0];

        navAccount.addEventListener('click', (event) => {
            event.preventDefault();

            this.getUser();
        });

        const navGrowdevers = document.getElementsByClassName('navGrowdevers')[0];

        navGrowdevers.addEventListener('click', (event) => {
            event.preventDefault();

            this.getUsers();
        });
    }
    
    validateNewUser() {
        const name = document.getElementsByName('name')[0];
        const login = document.getElementsByName('login')[0];
        const password = document.getElementsByName('password')[0];
        const type = document.getElementsByName('type')[0];

        this.resetError();
        this.error = false;
        
        if (name.value.length < 2) {
            name.classList.add('error');
            this.error = true;
        }
        if (login.value.length < 2) {
            login.classList.add('error');
            this.error = true;
        }
        if (password.value.length < 6) {
            password.classList.add('error');
            this.error = true;
        }
        if (!type.value) {
            type.classList.add('error');
            this.error = true;
        }

        if (this.error) {
            document.getElementsByClassName('alert-danger')[0].classList.remove('d-none');
        } else {
            this.register(name.value, login.value, password.value, type.value);
        }
    }

    validateLogin() {
        const username = document.getElementsByName('user')[0];
        const loginPassword = document.getElementsByName('loginPassword')[0];

        this.resetError();
        this.error = false;

        if (username.value.length < 2) {
            username.classList.add('error');
            this.error = true;
        }
        if (loginPassword.value.length < 6) {
            loginPassword.classList.add('error');
            this.error = true;
        }

        if (this.error) {
            document.getElementsByClassName('loginAlert')[0].classList.remove('d-none');
        } else {
            this.login(username.value, loginPassword.value) 
        }
    }

    resetError() {
        document.getElementsByName('name')[0].classList.remove('error');
        document.getElementsByName('login')[0].classList.remove('error');
        document.getElementsByName('password')[0].classList.remove('error');
        document.getElementsByName('type')[0].classList.remove('error');
        document.getElementsByName('user')[0].classList.remove('error');
        document.getElementsByName('loginPassword')[0].classList.remove('error');
        document.getElementsByClassName('alert-danger')[0].classList.add('d-none');
        document.getElementsByClassName('alert-success')[0].classList.add('d-none');
        document.getElementsByClassName('loginAlert')[0].classList.add('d-none');
    }

    register(name, login, password, type) {
        const url = `${this.baseUrl}/users`;
        const params = {
            "name": name,
            "password": password,
            "type": type,
            "username": login
        };
        axios.post(url, params)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    login(username, password) {
        const url = `${this.baseUrl}/login`;

        const params = {
            "username": username,
            "password": password
        }

        axios.post(url, params)
            .then(response => {
                localStorage.setItem('username', `${response.data.user.username}`);
                localStorage.setItem('uid', `${response.data.user.uid}`);
                localStorage.setItem('user', `${response.data.user.name}`);
                localStorage.setItem('token', `${response.data.token}`);
            })
            .then(this.userSession())
            .catch(error => {
                document.getElementById('alrt').innerHTML='<b>Login Inválido! Usuário e/ou senha inválidos!</b>';
                document.getElementById('alrt').classList.remove('d-none');
            })
    }

    getUser(){
        const account = localStorage.getItem('uid');

        const url = `${this.baseUrl}/users/${account}`;

        const headers = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        axios.get(url, headers)
            .then(response => this.populateAccount(response))
            .catch(error => console.log(error))
        
    }

    getUsers(){
        const url = `${this.baseUrl}/users`;
        
        const headers = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        axios.get(url, headers)
            .then(response => this.populateGrowdevers(response.data))
            .catch(error => console.log(error))
    }

    // Set name of user on top of page
    setUser(user) {
        const navbarName = document.getElementsByClassName('navbar-brand')[0];

        navbarName.innerHTML = `Olá, ${user}`;
    }

    populateAccount(data){
        document.querySelector('.accountInputs').innerHTML = '';
        document.querySelector('.growdevers').classList.add('d-none');
        document.querySelector('.userAccount').classList.remove('d-none');

        console.log(data);


        const userdata = ` 
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">UID</span>
                                </div>
                                <input type="text" class="form-control" name="uid" value="${data.data.user.uid}">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Nome</span>
                            </div>
                            <input type="text" class="form-control" name="name" value="${data.data.user.name}">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Tipo</span>
                            </div>
                            <input type="text" class="form-control" name="type" value="${data.data.user.type}>
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Username</span>
                            </div>
                            <input type="text" class="form-control" name="username" value="${data.data.user.username}></input>`;

        document.querySelector('.accountInputs').innerHTML = userdata;
    };

    populateGrowdevers(data){
        document.querySelector('.listGrowdevers tbody').innerHTML = '';
        document.querySelector('.growdevers').classList.remove('d-none');
        document.querySelector('.userAccount').classList.add('d-none');

        data.users.forEach(item => {
            const tr = `<tr>
                        <td>${item.uid}</td>
                        <td>${item.name}</td>
                        <td>${item.type}</td>
                        <td>${item.username}</td>
                        <td></td>
                    </tr>`;

            document.querySelector('.listGrowdevers tbody').innerHTML += tr;
        });
    }

}
