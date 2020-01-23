function enviarEmail() {
    let emailValue = document.getElementById('emailTxt').value;
    let mensagemValue = document.getElementById('areaTxt').value;
    let timestamp = new Date().getTime();


    // Conectar com o firebase
    // Objeto db recebe funções de acesso ao banco de dados
    let database = firebase.database();
        database.ref(timestamp).set({
        email: emailValue,
        mensagem: mensagemValue
    });
}