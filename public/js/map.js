//global variables
var markers = []
var contents = []
var infowindows = []

function initMap() {

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  // Defines Map and sets it to Mexico City
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.432608, lng: -99.133209},
    zoom: 14,
    mapTypeId: "terrain"
  });

  //sets the markers on the map
  setMarkers(map);
}

//hardcoded mexico data
var mexico = [
  {title: "atrio", lat: 19.434331, lng: -99.140164, url: "https://scontent-lga3-1.xx.fbcdn.net/t31.0-8/15068436_10154204506938790_8493317963348433027_o.jpg"},
  {title: "zocalo", lat: 19.432602, lng: -99.133205, url: "https://scontent-lga3-1.xx.fbcdn.net/t31.0-8/14102928_10153961036873790_6301174510094312346_o.jpg"},
  {title: "el rey statue", lat: 19.426504, lng: -99.137149, url: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/14212656_10153999825623790_4612144961473900845_n.jpg?oh=d4eadae932da1bffc813f24af5de79fb&oe=58BB53F0"},
]

    function setMarkers(map) {
      for (var i = 0; i < mexico.length; i++) {
        //defines the image
        var image = {
          url: mexico[i].url,
          scaledSize: new google.maps.Size(40, 40),
        };
        //defines the content inside the infowindow
        contents[i] =
          '<div id="content">'+
          '<img src="'+mexico[i].url+'" style="width:400px;height:auto;">'+
          '</div>';
        //defines infowindow
        infowindows[i] = new google.maps.InfoWindow({
          content: contents[i]
        });
        //identifies the marker to be placed
        markers[i] = new google.maps.Marker({
          position: {lat: mexico[i].lat, lng: mexico[i].lng},
          map: map,
          icon: image,
          title: mexico[i].title
        });
        //adds index property
        markers[i].index = i
        //adds a click feature to the marker for infowindow
        google.maps.event.addListener(markers[i],'click', function() {
        infowindows[this.index].open(map, markers[this.index]);
        });
      }
    }


    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      var waypoints = [];
      for (var i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray.options[i].selected) {
          waypoints.push({
            location: checkboxArray[i].value,
            stopover: true
          });
        }
      }

    var request = {
      origin: ,
      destination: ,
      travelMode: google.maps.TravelMode.WALKING
    };

    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            directionsDisplay.setOptions({
                suppressMarkers: true
            });
            var myRoute = response.routes[0].legs[0];
            for (var i = 0; i < myRoute.steps.length; i++) {
                Map.marker(myRoute.steps[i].start_location, myRoute.steps[i].instructions);
            }
        } else {
            console.log("directionsService : " + status);
        }
    });






    
    var geocoder;
    var map;
    var marker;
    function initialize(){
      var latlng=new google.maps.LatLng(-33.897,150.099);
      var myOptions={
        zoom:9,
        center:latlng,
        mapTypeId:google.maps.MapTypeId.TERRAIN};
      map=new google.maps.Map(document.getElementById("map"),myOptions);
      var rendererOptions={map:map};
      directionsDisplay=new google.maps.DirectionsRenderer(rendererOptions);
      var point1=new google.maps.LatLng(-33.8975098545041,151.09962701797485);
      var point2=new google.maps.LatLng(-33.8584421519279,151.0693073272705);
      var point3=new google.maps.LatLng(-33.87312358690301,151.99952697753906);
      var point4=new google.maps.LatLng(-33.84525521656404,151.0421848297119);
      var wps=[{location:point1},{location:point2},{location:point4}];
      var org=new google.maps.LatLng(-33.89192157947345,151.13604068756104);
      var dest=new google.maps.LatLng(-33.69727974097957,150.29047966003418);
      var request={
        origin:org,
        destination:dest,
        waypoints:wps,
        travelMode:google.maps.DirectionsTravelMode.DRIVING};
      directionsService=new google.maps.DirectionsService();directionsService.route(request,function(response,status){
        if(status==google.maps.DirectionsStatus.OK){
          directionsDisplay.setDirections(response);}
    else
    alert('failed to get directions');
  });
}
