function validarEmail(email) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.match(validRegex)) {
    swal("Erro", "Endereço de e-mail inválido!", "error");
    document.getElementById("email").focus();
    return false;
  } else {
    return true;
  }

}

function validarNome(valor) {
  if (valor.length == 0) {
     swal("Erro", "O campo Nome é obrigatório.", "error");
     document.getElementById("nome").focus();
     return false;
  } else {
    return true;
  }
}

function validarSobrenome(valor) {
  if (valor.length == 0) {
     swal("Erro", "O campo Sobrenome é obrigatório.", "error");
     document.getElementById("sobrenome").focus();
     return false;
  } else {
    return true;
  }
}

function validarInstituicao(valor) {
  if (valor.length == 0) {
     swal("Erro", "O campo Instituição é obrigatório.", "error");
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

      swal("Erro ao fazer login", mensagemErro + " \n\nCaso seja necessário, entre em contato através do email: contato@ciga-mpmg.com.br ", "error");
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
  swal("Cadastro solicitado com sucesso", "Caso seja necessário, entre em contato através do email: contato@ciga-mpmg.com.br ", "success");
}).catch(function(error) {
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

      swal("Erro ao solicitar cadastro", mensagemErro + " \n\nCaso seja necessário, entre em contato através do email: contato@ciga-mpmg.com.br ", "error");
  });}
}



resetPassword = function() {
  var email = document.getElementById("email").value;
  console.log(email);

  if(validarEmail(email)){
    console.log(email);

    firebase.auth().sendPasswordResetEmail(email).
    then(function(){
      swal("", "Confira o seu email para criar uma nova senha!", "info")
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

      swal("Erro", mensagemErro + " \n\nCaso seja necessário, entre em contato através do email: contato@ciga-mpmg.com.br ", "error");
    });
  }
}
