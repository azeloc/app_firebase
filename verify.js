var approved = app.auth().verifyIdToken(idToken)
  .then(function(decodedToken) {
    var uid = decodedToken.uid;
    return true;
  }).catch(function(error) {
    // Handle error
  });
