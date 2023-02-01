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
  var password = document.getElementById("password").value;
  var nome = document.getElementById("name").value;
  var adicional = document.getElementById("adicional").value;
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
