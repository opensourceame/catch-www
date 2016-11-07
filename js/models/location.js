ams.model.location = function(data){

	this.marker_url = ko.observable();
	this.lat = ko.observable(data.coords.lat);
	this.lng = ko.observable(data.coords.long);
	this.id = ko.observable(data.id);
	this.moves = ko.observableArray();
	
	this.markerObject = ams.map.addMarker(this.lat(),this.lng(), this.id());
	
	this.actions = ko.observableArray();
	
	for (var a in data.actions){
		this.actions.push(data.actions[a]);
	}
	
	var move = function(m){
	
		this.loc_id = ko.observable(m.location);
		this.cost = ko.observable(m.cost || 0);
		this.transport = ko.observable(m.transport);
	}
	
	for (var i in data.moves){
		this.moves.push(new move(data.moves[i]));
	}
	
	
}