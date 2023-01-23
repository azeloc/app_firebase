var firebaseConfig = {
        apiKey: "AIzaSyDOLIC4uYMcB7Xxa0eBGceuFaPDVNEqUIw",
        authDomain: "exemplo-4d8da.firebaseapp.com",
        databaseURL: "https://exemplo-4d8da-default-rtdb.firebaseio.com",
        projectId: "exemplo-4d8da",
        storageBucket: "exemplo-4d8da.appspot.com",
        messagingSenderId: "153399345555",
        appId: "1:153399345555:web:4c1daa38f897a0c7b52866"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var approved = firebase.auth().verifyIdToken(idToken)
  .then(function(decodedToken) {
    var uid = decodedToken.uid;
    return true;
  }).catch(function(error) {
    // Handle error
  });
