#!/usr/bin/env node

var admin = require("firebase-admin");
var serviceAccount = require('~/Documents/curso-r/portfolio-25b63-firebase-adminsdk-vuipg-b5e94eb062.json');

var firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseUrl: "https://portfolio-25b63-default-rtdb.firebaseio.com"
};

// Initialize Firebase
var app = initializeAppp(firebaseConfig);
