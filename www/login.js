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
      console.log(token);
      location.replace("http://127.0.0.1:4242/?t="+token)
});
    }).catch(function(error){
      alert("Erro ao fazer login. \n\nCaso seja necessário, entre em contato através do email: contato@ciga-mpmg.com.br ");
    });
}

register = function() {
  var email = document.getElementById("email").value;
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var instituicao = document.getElementById("instituicao").value;
  var password = "";
  if (validarEmail(email) && validarNome(nome) && validarSobrenome(sobrenome) &&
  validarInstituicao(instituicao)) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(user){
      firebase.auth().currentUser.updateProfile({
        displayName: nome,
        department: adicional
      })
    }).catch(function(error){
        alert("Erro ao cadastrar. \n\nCaso seja necessário, entre em contato através do email: contato@ciga-mpmg.com.br ");
    });
  }
}


