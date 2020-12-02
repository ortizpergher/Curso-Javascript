export default class ValorTicket {
    constructor(categoria) {
        this.categoria = categoria;
    }

    calcularValorTicket() {
        const categoria = document.getElementsByName('categoria')[0].value;
        
        switch (categoria) {
            case '1':
                return '4.80';
                break;
            case '2':
                return '5.90';
                break;
            case '3':
                return '8.30';
                break;
            case '4':
                return '9.70';
                break;    
            default:
                return '11.50';
                break;
        }
    }
}