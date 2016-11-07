      window.fbAsyncInit = function() {
        FB.init({
          appId      : '1602409196651130',
          xfbml      : true,
          version    : 'v2.0'
        });
        
	    FB.Event.subscribe('auth.authResponseChange', function(response) {
	        
	        if (response.status === 'connected') {
	            
	            ams.me.fbid(response.authResponse.userID);
	            
	            FB.api('/me',function(me){
		            FB.api('/me/picture?height=40&width=40',function(mepicture){
			            ams.api.login(ams.me.fbid(), me.first_name, me.last_name, mepicture.data.url, ams.me.type());
			            ams.me.first_name(me.first_name);
			            ams.me.last_name(me.last_name);
			            ams.me.photo_url(mepicture.data.url);
			            ams.players.removeByfbid(ams.me.fbid());
			            ams.me.loggedIn(true);
			            ams.api.fetchMoves();
			            setInterval(ams.api.intervalUpdate, 2500);
			        });
	            });
	            
	            
	            
	        } else if (response.status === 'not_authorized') {
	        } else {
	        }
	        
	    });

      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));


		function checkLoginState() {
		}