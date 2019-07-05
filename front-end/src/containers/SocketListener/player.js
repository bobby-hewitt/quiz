import openSocket from 'socket.io-client';
var socket;

function subscribeToPlayerEvents(self) {
	//decalre the socket
	socket = openSocket('http://localhost:9000');
	//notify that it is a player joining.
	socket.emit('player-connected', {short: 'ABCD'})
	socket.on('player-joined-room', successJoiningRoom.bind(this, self))
	socket.on('error-joining-room-no-host', errorJoiningRoom.bind(this, self))
	socket.on('error-joining-room', errorJoiningRoom.bind(this, self))
	socket.on('example-listener', successJoiningRoom.bind(this, self))
}

function roomFull(self){
	
}

function hostQuit(self){
	
}

function successJoiningRoom(self, data){
	console.log('success,', data)
	self.props.playerSetRoom(data.room)
	self.props.playerSetUsers(data.users)
}

function errorJoiningRoom(self, data){
	console.log('error joining room')
}

function startRound(self){
	
}

function joinRoom(data, self){
	
}

export { 
	subscribeToPlayerEvents
};