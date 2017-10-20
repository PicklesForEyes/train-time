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

    if(name.length && destination.length && firstTrain.length && frequency.length){
      // database.ref().push({
      //   trainName: name,
      //   trainDestination: destination,
      //   trainStart: firstTrain,
      //   trainFrequency: frequency
      // })
    } else {
      console.log('One is too short')
    }
  })

  database.ref().on('child_added', function(snapshot){
    var value = snapshot.val()

    var starting = value.trainStart.split(':');
    var hours = starting[0];
    var minutes = starting[1];
    var startingTime = moment(moment().format('YYYYMMDD'))
    startingTime.add(hours, 'hours').add(minutes, 'minutes');



    $('#firebase-table').append(
      '<tr><td>' + value.trainName +
      '</td><td>' + value.trainDestination +
      '</td><td>' + value.trainFrequency + '</td></tr>'
      )
  })

})