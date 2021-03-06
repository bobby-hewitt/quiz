//app setup
const cors = require('cors')
const express = require('express')
const app = express()
const path = require('path')
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const slack = require('./slack')
//set up environment variables
require('dotenv').config({path: '.env'})
var PORT = process.env.PORT || 9000
//set up cross origin policy and serve build folder of create react app. (this will only be used when we merge server and front end)
app.use(cors())
app.use(express.static(path.resolve(__dirname, '..', 'build')));
// so we can access body of post requests
app.use( bodyParser.json());       
app.use(bodyParser.urlencoded({     
  extended: true
}))

// set up database connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB.?')
});
mongoose.connection.on('connected', function() {
    console.info('Successfully connected to the database')
});

//models and methods
const Rooms = require('./models/rooms')
const User = require('./models/users')
const Player = require('./MethodsPlayer/connection')
const Host = require('./MethodsHost/connection')

// send all uncaught routes to build directory
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});



io.on('connection', function(socket){
	console.log('socket connected')
	//set up listeners for all sockets  
	//All listeners to be prefixed with 'host-' or 'player-'
	socket.on('host-connected', Host.connected.bind(this, socket))
	socket.on('player-connected', Player.connected.bind(this, socket))
  	
  	socket.on('disconnect', disconnect.bind(this, socket));
});



function disconnect(socket){
	// Rooms.remove({})
	Rooms.findOne({long: socket.id}, (err, room) => {
		//if it is a host leaving then delete room from database
		if (room) return room.remove()
		// otherwise handle player leaving logic
	})
}

http.listen(PORT, function(err){
	if (err){
		console.log(err)
		return
	} else {
		console.log('listening one', PORT);
	}
});

// User.deleteMany({}).exec()

// slack.getUsers()



