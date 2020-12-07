export default class Login {
    constructor(placa, categoria, data, hora, valor, valorRecebido, troco) {
        this.placa = placa;
        this.categoria = categoria;
        this.data = data;
        this.hora = hora;
        this.valor = valor;
        this.valorRecebido = valorRecebido;
        this.troco = troco;
        this.registro = [];
    }

    passagem() {
    
        let error = false;
    
        this.resetError(this.placa, this.categoria, this.valorRecebido);
    
        if (placa.value.length != 7) {
            this.placa.classList.add('error');
            error = true;
        }        
        if (this.categoria.value < 1 ) {
            this.categoria.classList.add('error');
            error = true;
        }
        if (this.valorRecebido.value < 1) {
            this.valorRecebido.classList.add('error');
            error = true;
        }
        if (error) {
            document.getElementsByClassName('alert-danger')[0].classList.remove('d-none');
        } else {        
            this.registro.push({ 'placa': this.placa.value, 'categoria': this.categoria.value, 'data': this.data, 'hora': this.hora, 
               'valor': this.valor.value, 'valorRecebido': this.valorRecebido.value, 'troco': this.troco });
            this.resetError(this.placa, this.categoria, this.valorRecebido);
            document.getElementsByClassName('alert-success')[0].classList.remove('d-none');    
        }
    }

    resetError() {
        this.placa.classList.remove('error');
        this.categoria.classList.remove('error');
        this.valorRecebido.classList.remove('error');
        document.getElementsByClassName('alert-danger')[0].classList.add('d-none');
        document.getElementsByClassName('alert-success')[0].classList.add('d-none');
    }
    
    
}
