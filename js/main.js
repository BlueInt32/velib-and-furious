//Google Maps init
function initialize() {

var latlng = new google.maps.LatLng(-25.363882,131.044922);
var mapOptions = {
  center: latlng,
  zoom: 8
};
var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title:"Hello World!",
    icon: 'img/bike9.svg'
});

var infoContent = '<div id="content">'+
    '<h1 id="firstHeading" class="firstHeading">Station Velib</h1>'+
    '<div id="bodyContent">'+
    '<ul><li>12 vélibs</li><li>4 emplacements libres</li></ul>'+
    '</div>';
var infowindow = new google.maps.InfoWindow({
    content: infoContent
});
google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
});

}
google.maps.event.addDomListener(window, 'load', initialize);
