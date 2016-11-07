ams.api = {};


ams.api.call = function(url, method, data){
    method = method || 'GET';
    
    var ajaxObject = $.ajax({
        url: '/api/' + url,
        dataType: 'json',
        type: method,
        data: data
    }); 
    
    return ajaxObject;
};


ams.api.login = function(user_id, first_name, last_name, picture_url, type){
	var call = ams.api.call('auth','POST',
			{
				'facebook_id' : user_id,
				'first_name' : first_name,
				'last_name' : last_name,
				'picture_url' : picture_url,
				'type' : type
			});
	call.done(function(e){
		$('.get-bike').removeClass('active');
		$('.get-cash').removeClass('active');
		$('.hide-cs').removeClass('active');
		$('.hide-church').removeClass('active');
		ams.me.loggedIn(true);
		ams.me.setData(e);
		ams.api.fetchMe();
		ams.api.fetchEvents();
	});
	call.fail(function(){
		ams.api.fetchMe();
		ams.api.fetchEvents();
	});
}


ams.api.reset = function () {
	var call = ams.api.call('reset','GET');
	call.done(function(){
		window.location.reload(true); 
	});
}

ams.api.fetchUsers = function(){
	var call = ams.api.call('users','GET');
	call.done(function(users){
		var size = 0;
		for (var u in users){
			ams.players.addPlayer(new ams.model.user(users[u]));
			++size;
		}
		
		if (size === 0){
			ams.me.type('criminal');
		}
	});
}


ams.api.fetchLocations = function(){
	var call = ams.api.call('locations','GET');
	call.done(function(response){
		for (var l in response){
			var location = new ams.model.location(response[l]);
			ams.locations.addLocation(location);
		}
		ams.api.fetchUsers();
		
	});
}

ams.api.fetchMe = function(callback){
	var call = ams.api.call('users/me','GET');
	call.done(function(response){
		ams.me.location(response.location);
		ams.me.setData(response);
		if (callback) callback();
	});
}


ams.api.fetchMoves = function(){
	var call = ams.api.call('move','GET');
	call.done(function(moves){
		for (var m in moves){
			ams.locations.changeMarkerIconById(moves[m].location, '/images/'+ moves[m].transport + '.png');
		}
		
	})
}

ams.api.action = function(action){
	console.log('action',action);
	if (action == 'none'){
		return ams.locations.seenActions(true);
	}
	
	var call = ams.api.call('action/' + action,'POST');
	call.done(function(response){
		ams.locations.seenActions(true);
		ams.api.fetchMe(function(){
			ams.locations.resetAllMarkers(function(){
				ams.api.fetchMoves();
			});
		});
		
	});
	
	call.fail(function(){
		if (action == 'bike'){
			ams.locations.seenActions(true);
			alert('Not enough money to buy a bike');
		}
	})
	
}

ams.api.intervalUpdate = function(){
	ams.api.updateUsers();
	ams.api.updateEvents();
}

ams.api.updateEvents = function(){
	var call = ams.api.call('events','GET');
	call.done(function(events){
		for (var e in events){
			ams.events.addEvent(events[e]);	
		}
	});	
	
}

ams.api.fetchEvents = function(){
	var call = ams.api.call('events','GET');
	call.done(function(events){
		for (var e in events){
			ams.events.pushEvent(events[e]);	
		}
	});	
}


ams.api.updateUsers = function(){
	var call = ams.api.call('users','GET');
	call.done(function(users){
		for (var u in users){
			if (ams.players.getById(users[u].facebook_id)){
				ams.players.getById(users[u].facebook_id).location(users[u].location);
			}
			
		}
	});	
}


ams.api.move = function(pos){

	ams.api.call('move/' + pos,'POST').done(function(){
	
		ams.locations.seenActions(false);
		ams.api.fetchMe(function(){
			ams.locations.resetAllMarkers(function(){
				ams.api.fetchMoves();
		$('.get-bike').removeClass('active');
		$('.get-cash').removeClass('active');
		$('.hide-cs').removeClass('active');
		$('.hide-church').removeClass('active');
		
		if (ams.locations.actions()){
			var acts = ams.locations.actions();
			for (var a in acts){
				if (acts[a].id == 'bike') {
					$('.get-bike').addClass('active');
				}
				if (acts[a].id == 'atm') {
					$('.get-cash').addClass('active');
				}
				if (acts[a].id == 'hide' && acts[a].modifier == 'get_stoned') {
					$('.hide-cs').addClass('active');
				}
				else if (acts[a].id == 'hide') {
					$('.hide-church').addClass('active');
				}
			}
			
		}
		ams.api.fetchMe();				
			});
		});
		
	});
}
