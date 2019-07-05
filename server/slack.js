var Slack = require('slack-node');
const User = require('./models/users')
const prototypingChannelID = 'C0404FE03'
const testChannelID = 'C36MY690T'
const generalChannelId = 'C03108NPN'
slack = new Slack(process.env.SLACK_TOKEN);


exports.getUsers = () => {
	listGeneralUsers()
}


// function listChannels(){
// 	console.log('lsiting channels')
// 	return new Promise((resolve, reject) => {
// 		slack.api('channels.list',{exclude_archived: true}, function(err, response){
// 		    if (err) return console.log('error', err)
// 		    else {
// 		    	console.log(response)
// 		    }
// 	  	});
// 	})
// }

function listGeneralUsers(){
	slack.api('channels.info',{channel: generalChannelId}, function(err, response){
	    if (err) return console.log('error', err)
	    else {
	    	const members = response.channel.members
	    	let promises = []
	    	for (var i = 0; i < members.length; i++){
	    		getUserInfo(members[i])
	    	}
	    	
	    	
	    }
  	});

}

function getUserInfo(user){
	return new Promise((resolve, reject) => {
		slack.api('users.info',{user}, function(err, response){
	    if (err) return reject()
	    else {
	    	console.log(response.user)
	    	if (!response.user.deleted){
	    		User.create(response.user, (err) => {
	    			if (err) return console.log('error creating user')
	    			console.log('user created')
	    		})
	    	}
	    }
  	});
	})
}
