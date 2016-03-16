var initMap = require('./../js/map.js').initMap;
var callback = require('./../js/map.js').callback;
var createMarker = require('./../js/map.js').createMarker;
  // var apiKey = "AIzaSyAtiJ713jUWoxp9UQWe1C1o5sTTxeO-jdc";
  //
  $( document ).ready(function() {
    $('#locateUser').click(function(){
      initMap();
      callback();
      createMarker();
    });
  });
