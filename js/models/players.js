ams.model.players = function(){
	var self = this;
	this.players = ko.observableArray();
	
	this.addPlayer = function(user){
		if (!user.fbid()){
			return false;
		}
		var currentPlayers = self.players();
		
		for (var c in currentPlayers){
			if (currentPlayers[c].fbid() == user.fbid() || user.fbid() == ams.me.fbid()){
				currentPlayers[c].location(user.location());
				return false;
			}
		}
		
		self.players.push(user);
	}
	
	
	this.removeByfbid = function(fbid){
		var currentPlayers = self.players();
		
		for (var c in currentPlayers){
			if (currentPlayers[c].fbid() == fbid){
				currentPlayers[c].markerObject.setVisible(false);
				self.players.remove(currentPlayers[c]);
			}
		}
		
	}
	
	this.getById = function(fbid){
		var currentPlayers = self.players();
		
		for (var c in currentPlayers){
			if (currentPlayers[c].fbid() == fbid){
				return currentPlayers[c];
			}
		}
	}
	this.getByUserId = function(userid){
		var currentPlayers = self.players();
		
		for (var c in currentPlayers){
			if (currentPlayers[c].id() == userid){
				return currentPlayers[c];
			}
		}
	}
	
}