//grab the values for the 3 categories


//algorithim begins for grabbing playlist
var intenseStudyingPlaylist = "https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A0ExbFrTy6ypLj9YYNMTnmd"; //classical w/ beats
var superiorStudyPlaylist = "https://embed.spotify.com/?uri=spotify%3Auser%3Ataylordiem1025%3Aplaylist%3A1y5Xvya1yqXOMpF6ErmExv"; //more instrumental
var workdayLoungePlaylist = "https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A19uVLpMdgv0Dy3LvpYx4LA"; //lounge/elevator type music
var acousticOriginalPlaylist = "https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A0PRs1Xaui4zCv9LdIIt20X"; //acoustic guitar
var edmTurnupPlaylist = "https://embed.spotify.com/?uri=spotify%3Auser%3Acoffierf%3Aplaylist%3A0OnntT006dGlNSinPElMdU"; //edm turnup
var partyHits2k15Playlist = "https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A4MATto5gVBtUNCq2ASrFf4"; //hella turnup
var chosenPlaylist;

function doWork(){
	//grab the values for the 3 categories
	var userTime = document.getElementById("TIME").value;
	var userFeeling = document.getElementById("MOOD").value;	
	var userWorkingOn = document.getElementById("WORK".value);
	if (userTime == "30 min"){
	    if(userFeeling =="Stressed"){
			if(userWorkingOn =="Studying for a Test/Quiz"){
				chosenPlaylist = intenseStudyingPlaylist;
			}	
			else if(userWorkingOn == "Reading" ){
				chosenPlaylist = workdayLoungePlaylist;
			}
			else{
				chosenPlaylist = edmTurnupPlaylist;
			}
		}
		else if(userFeeling =="Relaxed"){
			if(userWorkingOn =="Studying for a Test/Quiz"){
				chosenPlaylist = edmTurnupPlaylist;
				
			}	
			else if(userWorkingOn == "Reading" ){
				chosenPlaylist= acousticOriginalPlaylist;
			}
			else{	
				chosenPlaylist= superiorStudyPlaylist;
		}
	  }
	 }		

	else if (userTime == "1 hour"){
		 if(userFeeling =="Stressed"){
			if(userWorkingOn =="Studying for a Test/Quiz"){
				chosenPlaylist = intenseStudyingPlaylist;
			}	
			else if(userWorkingOn == "Reading" ){
				chosenPlaylist= workdayLoungePlaylist;
			}
			else{
			 chosenPlaylist= acousticOriginalPlaylist;
			}
		}
		else if(userFeeling =="Relaxed"){
			if(userWorkingOn =="Studying for a Test/Quiz"){
				chosenPlaylist= partyHits2k15Playlist;
			}	
			else if(userWorkingOn == "Reading" ){
				chosenPlaylist = edmTurnupPlaylist;
			}
			else{	
				chosenPlaylist = partyHits2k15Playlist;
		}
	  }
	    
	}
	else if (userTime == "2 hours"){
		 if(userFeeling =="Stressed"){
			if(userWorkingOn =="Studying for a Test/Quiz"){
				chosenPlaylist= superiorStudyPlaylist;
			}	
			else if(userWorkingOn == "Reading" ){
				chosenPlaylist= acousticOriginalPlaylist;
			}
			else{
				chosenPlaylist= intenseStudyingPlaylist;
			}
		}
		else if(userFeeling =="Relaxed"){
			if(userWorkingOn =="Studying for a Test/Quiz"){
				chosenPlaylist= intenseStudyingPlaylist;
			}	
			else if(userWorkingOn == "Reading" ){
				chosenPlaylist = edmTurnupPlaylist;
			}
			else{}	
				chosenPlaylist = partyHits2k15Playlist;
	  		}
	    
		}
	
	document.getElementById('frame').innerHTML = '<iframe id = "embdedSpotify" src="https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A0ExbFrTy6ypLj9YYNMTnmd" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
	
	/*var x = document.createElement("frame");
	x.setAttribute("src",chosenPlaylist);
	document.body.appendChild(x);
	*/
}
