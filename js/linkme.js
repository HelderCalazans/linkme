function enviarEmail() {
    var emailValue = document.getElementById('emailTxt').value;
    var mensagemValue = document.getElementById('areaTxt').value;

    // Conectar com o firebase
    // Objeto db recebe funções de acesso ao banco de dados
    var database = firebase.database();
        database.ref('usuario').set({
        email: emailValue,
        mensagem: mensagemValue
    });
}