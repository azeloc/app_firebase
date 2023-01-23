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
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(user){}).catch(function(error){
    alert("Falha ao logar");
  });
}
