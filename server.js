const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');
const app = express();

const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

var config = {
    apiKey: "AIzaSyC093mcKJ8ilcbgOODnHk5Hyr72urQdTyA",
    authDomain: "exact-hackathon.firebaseapp.com",
    databaseURL: "https://exact-hackathon.firebaseio.com",
    projectId: "exact-hackathon",
    storageBucket: "exact-hackathon.appspot.com",
    messagingSenderId: "539869004879",
  };

  firebase.initializeApp(config);
  const messaging = firebase.messaging();
  // Add the public key generated from the console here.
  messaging.usePublicVapidKey("BATGhOdAsD4q4hReeXec_cb9nxRy6Gx9wR0wg7JXQK8d2ahJMKEvNjlG-IsGD1Ow-_8-JTE90nqk68zyJfmy0rY");

app.listen(port, () => {
    routes(app);
    console.log('We are live on ' + port);
});