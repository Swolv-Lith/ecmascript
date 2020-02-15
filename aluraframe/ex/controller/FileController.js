class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        //cria um Arquivo com as suas propriedades;
        //this._inputDados.value.toUpperCase().split('/');
        // let dados = this._inputDados.value.split('/').map(item => item.toUpperCase());
        // let arquivo = new Arquivo(...dados); // usando spread operator
        let arquivo = ArquivoHelper.cria(this._inputDados.value);
        console.log(`Dados do arquivo: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`);
        // exibe mensagem no console com os dados do arquivo.
        this._limpaFormulario();
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}