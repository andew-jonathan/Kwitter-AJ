
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCRFiw8ePezey_A12Q9INWUeJzuHNPzVNw",
    authDomain: "kwitter-f6045.firebaseapp.com",
    databaseURL: "https://kwitter-f6045-default-rtdb.firebaseio.com",
    projectId: "kwitter-f6045",
    storageBucket: "kwitter-f6045.appspot.com",
    messagingSenderId: "33290429831",
    appId: "1:33290429831:web:a829fb5a79d502b544df22",
    measurementId: "G-TT287BNKKY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();