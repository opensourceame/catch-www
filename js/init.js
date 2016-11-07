


ams.init = function(){
	ams.map.init();
	
	ams.locations = new ams.model.locations();
	ams.players = new ams.model.players();
	ams.events = new ams.model.events();
	ams.players.addPlayer(ams.me);
	
	ko.applyBindings({
		ams: ams
	});
	
	ams.api.fetchLocations();
	
/*
	setInterval(function(){
		ams.api.fetchUsers();
	}, 5000);
	
*/
}

google.maps.event.addDomListener(window, 'load', ams.init);


function isInt(n) {
   return n % 1 === 0;
}