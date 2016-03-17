var initMap = require('./../js/map.js').initMap;

$( document ).ready(function() {
  var selectType = '';
  var selectKeyword = '';
  initMap(selectType, selectKeyword);

  $("form.information").submit(function(event) {
    event.preventDefault();

    newCatagory = $("select.catagory").val();
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

    initMap(selectType, selectKeyword);
  });
});
