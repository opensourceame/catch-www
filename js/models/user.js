ams.model.user = function(data){
	var self = this;
	this.loggedIn = ko.observable(false);
	this.location = ko.observable();
	this.markerObject = false;
	this.photo_url = ko.observable();
	this.id = ko.observable();
	this.location.subscribe(function(id){
	
		var id = parseInt(id);
		
		var locpos = ams.locations.getById(id);
		
		if (!locpos){
			if (self.markerObject){
				self.markerObject.setVisible(false);
			}
			
			return false;
		}
		
		
		var latlng = new google.maps.LatLng(locpos.lng(),locpos.lat());
		
		if (self.markerObject){
			self.markerObject.setVisible(true);
			return self.markerObject.setPosition(latlng);
		}
		
	    self.markerObject = new google.maps.Marker({
	        position: latlng,
	        map: ams.map.map,
	        icon: ams.map.profileMarker(self.photo_url())
	    });
	    self.markerObject.setVisible(true);
	});
	
	
	this.fbid = ko.observable();
	this.first_name = ko.observable();
	this.last_name = ko.observable();
	this.type = ko.observable('agent');
	

	this.money = ko.observable();
	this.tram_tokens = ko.observable();
	this.bike_tokens = ko.observable();


	if (data){
	
		this.fbid(data.facebook_id);
		this.first_name(data.first_name);
		this.last_name(data.last_name);
		this.type(data.type);
		this.photo_url(data.picture_url || '');
		this.location(data.location);
		this.id(data.id);
	}
	
	this.setData = function(data){
		self.fbid(data.facebook_id);
		self.first_name(data.first_name);
		self.last_name(data.last_name);
		self.type(data.type);
		self.photo_url(data.picture_url || '');
		self.location(data.location);
		self.id(data.id);
		self.money(data.money);
		self.bike_tokens(data.bike_tokens);
	}
	
	if (data){
		self.setData(data);
	}
	
	return this;	
}

ams.me = new ams.model.user();