$(document).ready(function(){

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBVxfamITNH4qG7B5Dkri14UXuLO2fZRfk",
    authDomain: "train-time-937d3.firebaseapp.com",
    databaseURL: "https://train-time-937d3.firebaseio.com",
    projectId: "train-time-937d3",
    storageBucket: "train-time-937d3.appspot.com",
    messagingSenderId: "385888615867"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $('#submit').on('click', function(event){
    event.preventDefault();

    var name = $('#train-name-input').val().trim();
    var destination = $('#destination-input').val().trim();
    var firstTrain = $('#first-train-input').val().trim();
    var frequency = $('#frequency-input').val().trim();

    console.log(name, destination, firstTrain, frequency);
  })

})