var apiKey = "AIzaSyAtiJ713jUWoxp9UQWe1C1o5sTTxeO-jdc";

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
};
