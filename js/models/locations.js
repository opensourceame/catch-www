ams.model.locations = function(){
	var self = this;
	
	var defaultMarker = '/images/default.png';
	this.locations = ko.observableArray();

	this.seenActions = ko.observable(false);


	this.getById = function(id){
		var locs = self.locations();
		for (var l in locs){
			if (locs[l].id() == id){
				return locs[l];
			}
		}
	}
	
	
	this.actions = ko.computed(function(){
	
		if (self.seenActions()){
			return false;
		}
		
		if (!ams.me.location()){
			return false;
		}
		
		if (self.getById(ams.me.location()).actions()){
			return self.getById(ams.me.location()).actions();
		}
		
		return false;
		
	});


	this.addLocation = function(location){
		var currentLocations = self.locations();
		
		for (var c in currentLocations){
			if (currentLocations[c].id() == location.id()){
				return false;
			}
		}
		
		self.locations.push(location);
	}

	this.changeMarkerIconById = function(id, icon){
		self.getById(id).markerObject.setIcon(icon);
	}
	
	this.resetAllMarkers = function(callback){
		var locs = self.locations();
		for (var l in locs){
			
			if (locs[l].id() == ams.me.location()){
				locs[l].markerObject.setVisible(false);
			} else {
				locs[l].markerObject.setVisible(true);
			}
			
			locs[l].markerObject.setIcon(defaultMarker);
		}
		if (callback) callback();
	}
}