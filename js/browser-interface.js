var initMap = require('./../js/map.js').initMap;
var service = require('./../js/map.js').service;

$( document ).ready(function() {
  //create a map
  initMap();

  $("form.information").submit(function(event) {
    event.preventDefault();
    var selectType = '';
    var selectKeyword = '';

    //set type and keyword
    newCatagory = $("select.catagory").val();
    if (newCatagory !== '') {
      if (newCatagory === 'Coffee') {
        selectType = 'cafe';
        selectKeyword = 'coffee';
      } else if (newCatagory === 'Restaurants') {
        selectType = 'restaurant';
        selectKeyword = '';
      } else if (newCatagory === 'Parking') {
        selectType = 'parking';
        selectKeyword = '';
      } else if (newCatagory === 'Fitness Centers') {
        selectType = 'gym';
        selectKeyword = '';
      } else {
        selectType = '';
        selectKeyword = '';
      }

      //create new google.maps.places.PlacesService
      service(selectType, selectKeyword);
    }
  });
});
