// var apiKey = "AIzaSyAtiJ713jUWoxp9UQWe1C1o5sTTxeO-jdc";
//
// function initMap() {
//   var chicago = {lat: 41.85, lng: -87.65};
//   var indianapolis = {lat: 39.79, lng: -86.14};
//
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: chicago,
//     scrollwheel: false,
//     zoom: 7
//   });
//
//   var directionsDisplay = new google.maps.DirectionsRenderer({
//     map: map
//   });
//
//   // Set destination, origin and travel mode.
//   var request = {
//     destination: indianapolis,
//     origin: chicago,
//     travelMode: google.maps.TravelMode.DRIVING
//   };
//
//   // Pass the directions request to the directions service.
//   var directionsService = new google.maps.DirectionsService();
//   directionsService.route(request, function(response, status) {
//     if (status == google.maps.DirectionsStatus.OK) {
//       // Display the route on the map.
//       directionsDisplay.setDirections(response);
//     }
//   });
// }













var map;
function initMap() {
  // navigator.geolocation.getCurrentPosition(success, error, options);
  navigator.geolocation.getCurrentPosition(function(location){
  console.log(location);

    map = new google.maps.Map(document.getElementById('map'), {
      // center: {lat: -34.397, lng: 150.644},
      center: {lat: location.coords.latitude, lng: location.coords.longitude},
      zoom: 8
    });
  });
};
