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
     } else {
        var mensagemErro = error.message;
        console.log(mensagemErro);
     }

      alert("Erro ao fazer login: \n\n" + mensagemErro + " \n\nCaso seja necessário, entre em contato através do email: contato@ciga-mpmg.com.br ");
    });
}

register = function() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var instituicao = document.getElementById("instituicao").value;
  console.log(email);
  console.log(nome);
  console.log(sobrenome);
  console.log(instituicao);
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
     } else {
        var mensagemErro = error.message;
        console.log(mensagemErro);
     }

      alert("Erro ao solicitar cadastro: \n\n" + mensagemErro + " \n\nCaso seja necessário, entre em contato através do email: contato@ciga-mpmg.com.br ");
  });
}
