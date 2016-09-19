/**
 * 
 */
var userLocation = document.getElementById("geolocation");
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(showOnStreetView);
} else {
	userLocation.innerHTML = "Geolocation is not supported by this browser.";
}

function showOnStreetView(position) {

	var panorama = new google.maps.StreetViewPanorama(document
			.getElementById('my_street_view'), {
		position : {
			lat : position.coords.latitude,
			lng : position.coords.longitude
		},
		pov : {
			heading : 160,
			pitch : 0
		},
		zoom : 1
	});

}
