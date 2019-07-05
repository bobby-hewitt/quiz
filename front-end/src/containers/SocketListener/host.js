import openSocket from 'socket.io-client';
var socket;

function subscribeToHostEvents(self) {
	socket = openSocket('http://localhost:9000');
	socket.emit('host-connected')
	socket.on('host-room-generated', roomGenerated.bind(this,self))
	// socket.on('host-room-code-generated', successJoiningRoom.bind(this, self))
}

function roomFull(self){
	
}

function hostQuit(self){
	
}

function roomGenerated(self, data){
	console.log(self, data)
	self.props.hostSetRoom(data)
}

function errorJoiningRoom(){

}

function startRound(self){
	
}

function joinRoom(data, self){
	
}


export { 
	subscribeToHostEvents
};