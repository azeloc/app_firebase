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
      alert("Falha ao logar");
    });
}

register = function() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var instituicao = document.getElementById("instituicao").value;

  fetch("https://us-central1-exemplo-4d8da.cloudfunctions.net/criaUsuario?email="+email+"&nome="+nome+"&instituicao="+instituicao).then(function(response) {
  alert("Usuário criado com sucesso! Aguarde a aprovação do seu cadastro ou entre em contato com ciga@aecom.com.");
}).catch(function(err) {
  alert("Erro na criação do usuário.");
});
}
