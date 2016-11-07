ams.model.events = function(){

	var self = this;
	this.events = ko.observableArray();
	
	this.addEvent = function(event){
		var event = populate(event);
		var currentEvents = self.events();
		
		for (var c in currentEvents){
			if (currentEvents[c].id == event.id){
				return false;
			}
		}
		
		self.events.unshift(event);
	}
	
	this.pushEvent = function(event){
	
		var event = populate(event);
		var currentEvents = self.events();
		
		for (var c in currentEvents){
			if (currentEvents[c].id == event.id){
				return false;
			}
		}
		
		self.events.push(event);
	}
	
	var populate = function(event){
	
		if (event.user_id == ams.me.id()){
			var user = ams.me;
		} else {
			var user = ams.players.getByUserId(parseInt(event.user_id));
		}
		
		event.status_image = event.event;
		
		if (event.status_image == 'tram_tokens') event.status_image = 'tram';
		if (event.status_image == 'bike_tokens') event.status_image = 'get-bike';
		if (event.status_image == 'money') event.status_image = 'get-cash';
		if (event.status_image == 'cash') event.status_image = 'get-cash';
		
		event.status_image = '/images/' + event.status_image + '.png';
		event.user_name = user.first_name();
		event.image = user.photo_url();
		return event;
	}
	
	
}