var initMap = require('./../js/map.js').initMap;

$( document ).ready(function() {
  $('#locateUser').click(function(){
    initMap();
  });
});
