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
   console.log(nome);
   console.log(sobrenome);
   console.log(instituicao);

   fetch("https://us-central1-exemplo-4d8da.cloudfunctions.net/criaUsuario?email="+email+"&nome="+nome+"&instituicao="+instituicao).then(function(response) {
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


resetPassword = function() {
  var email = document.getElementById("email").value;
  console.log(email);

  if(validarEmail(email)){
    console.log(email);
    
    firebase.auth().sendPasswordResetEmail(email).
    then(function(){
      alert("Confira o seu email para criar uma nova senha!")
    }).catch(function(error){
     var codigoErro = error.code;
     console.log(codigoErro);

     if(codigoErro == "auth/user-not-found"){
       var mensagemErro = "Usuário não encontrado. Verifique se o email está correto. Se necessário, solicite o cadastro novamente.";
     } else if(codigoErro == "auth/invalid-email"){
       var mensagemErro = "Email inválido.";
     } else {
        var mensagemErro = error.message;
        console.log(mensagemErro);
     }

      alert("Erro ao enviar email para criar nova senha: \n\n" + mensagemErro + " \n\nCaso seja necessário, entre em contato através do email: contato@ciga-mpmg.com.br ");
    });
  }
}
