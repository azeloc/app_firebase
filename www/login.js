function validarEmail(email) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.match(validRegex)) {
    alert("Endereço de e-mail inválido!");
    document.getElementById("email").focus();
    return false;
  } else {
    return true;
  }

}

function validarNome(valor) {
  if (valor.length == 0) {
     alert("O campo Nome é obrigatório.");
     document.getElementById("nome").focus();
     return false;
  } else {
    return true;
  }
}

function validarSobrenome(valor) {
  if (valor.length == 0) {
     alert("O campo Sobrenome é obrigatório.");
     document.getElementById("sobrenome").focus();
     return false;
  } else {
    return true;
  }
}

function validarInstituicao(valor) {
  if (valor.length == 0) {
     alert("O campo Instituicao é obrigatório.");
     document.getElementById("instituicao").focus();
     return false;
  } else {
    return true;
  }
}

function gerarSenha() {
      var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
      var passwordLength = 16;
      var password = "";

      for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }
     password
}


login = function() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user){
      firebase.auth().currentUser.getIdToken(true).then(function(token){
      location.replace("http://127.0.0.1:4242/?t="+token)
});
    }).catch(function(error){
     var codigoErro = error.code;
     console.log(codigoErro);

     if(codigoErro == "auth/user-not-found"){
       var mensagemErro = "Usuário não encontrado. Verifique se o email está correto. Se necessário, solicite o cadastro novamente.";
     } else if(codigoErro == "auth/wrong-password"){
       var mensagemErro = "Senha inválida.";
     } else {
        var mensagemErro = error.message;
        console.log(mensagemErro);
     }

      alert("Erro ao fazer login: \n\n" + mensagemErro + " \n\nCaso seja necessário, entre em contato através do email: contato@ciga-mpmg.com.br ");
    });
}

register = function() {
  var email = document.getElementById("email").value;
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var instituicao = document.getElementById("instituicao").value;
    if (validarEmail(email) && validarNome(nome) && validarSobrenome(sobrenome) &&
  validarInstituicao(instituicao)){
  console.log(email);
  console.log(password);
  console.log(nome);
  console.log(sobrenome);
  console.log(instituicao);
  var password = String(gerarSenha());
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(user){
    firebase.auth().currentUser.updateProfile({
      displayName: nome,
      department: instituicao
    });
    alert("Cadastro solicitado com sucesso. \n\nCaso seja necessário, entre em contato através do email: contato@ciga-mpmg.com.br ");

  }).catch(function(error){
      console.log(error);
     var codigoErro = error.code;
     console.log(codigoErro);

     if(codigoErro == "auth/email-already-in-use"){
       var mensagemErro = "Este email já está cadastrado.";
     } else if(codigoErro == "auth/weak-password"){
      var mensagemErro = "Senha fraca: a senha deve ter 6 caracteres ou mais.";
     } else {
        var mensagemErro = error.message;
        console.log(mensagemErro);
     }

      alert("Erro ao solicitar cadastro: \n\n" + mensagemErro + " \n\nCaso seja necessário, entre em contato através do email: contato@ciga-mpmg.com.br ");
  });
  }
}


