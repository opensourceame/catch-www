ams.map = {};

ams.map.init = function() {

	var mapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(52.374802,4.8888819)
	};
	
	ams.map.map = new google.maps.Map(document.getElementById('play_map') , mapOptions);
	
	ams.map.loadKML();
	
}

ams.map.marker =  {
    url: '/images/default.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(50, 50),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 20)
};

ams.map.profileMarker =  function (url){
	return {
	    url: url,
	    // This marker is 20 pixels wide by 32 pixels tall.
	    size: new google.maps.Size(50, 50),
	    // The origin for this image is 0,0.
	    origin: new google.maps.Point(0,0),
	    // The anchor for this image is the base of the flagpole at 0,32.
	    anchor: new google.maps.Point(0, 25)
	};
}
ams.map.addMarker = function(lat,lng, id){

    var latlng = new google.maps.LatLng(lng,lat);
    
    var marker = new google.maps.Marker({
        position: latlng,
        map: ams.map.map,
        icon: ams.map.marker,
        title: id
    });
    
	google.maps.event.addListener(marker, 'click', function(e) {
		ams.api.move(id);
	});	
    
    return marker;
}

ams.map.loadKML = function() {

	var play_field = new google.maps.KmlLayer({
		url: 'http://hip.coffee/ams.kml?v=' + new Date().getTime(),
		suppressInfoWindows: true,
		map: ams.map.map
	});

}


