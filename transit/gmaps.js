var myLat = 0;
var myLng = 0;
var me = new google.maps.LatLng(myLat, myLng);
var request = new XMLHttpRequest();

var myOptions = {
	zoom: 13, center: me, mapTypeId: google.maps.MapTypeId.ROADMAP
};


var map;
var marker;
var infowindow = new google.maps.InfoWindow();
var places;

function init() {
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	getMyLocation();
}

function getMyLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
			myLat = position.coords.latitude;
			myLng = position.coords.longtitude;
			renderMap();
		});
	} else {
		alert("Geolocation not supported in browser.");
	}
}

function renderMap() {
	me = new google.maps.LatLng(myLat, myLng);

	map.panTo(me);

	marker = new google.maps.Marker({
		postion: me, title: "Here I am!"
	});
	marker.setMap(map);

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(marker.title);
		infowindw.open(map, marker);
	});

	var request = {
		location: me,
		radius: '500',
		types: ['food']
	};
	service = new google.maps.places.PlacesService(map);
	service.search(request, callback);
}

function callback (results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		alert("Got places back!");
		places = results;
		for (var i = 0; i < results.length; i++) {
			createMarker(results[i]);
		}
	}
}

function createMarker (place)
{
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.close();
		infowindow.setContet(place.name);
		infowindow.open(map, this);
	});
}
