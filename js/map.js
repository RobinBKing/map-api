
var infowindow;
var markers =[];
var pyrmont;

exports.initMap = function () {
  //get current location
  navigator.geolocation.getCurrentPosition(function(location){
    pyrmont = {lat: location.coords.latitude, lng: location.coords.longitude};


    //create map based on current location
    map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

    //set information for display on marker
    infowindow = new google.maps.InfoWindow();
  });
  return map;
};

//create new google.maps.places.PlacesService
exports.service = function (selectType, selectKeyword) {
  var newService = new google.maps.places.PlacesService(map);
  newService.nearbySearch({
    location: pyrmont,
    radius: 500,
    type: [selectType],
    keyword: [selectKeyword]
  }, callback);
  return newService;
};

//returns markers and InfoWindow
var callback = function (results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    deleteMarkers();
    for (var i = 0; i < results.length; i++) {
      var marker = createMarker(results[i]);
      markers.push(marker);
    }
  }
  console.log(results);
};

var createMarker = function (place) {
  var placeLoc = place.geometry.location;
  //creates a Marker
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  //adds information to markers
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name + ' ' + place.vicinity);
    infowindow.open(map, this);
  });
  return marker;
};

//deletes markers
function deleteMarkers(){
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
