const Rooms = require('../models/rooms')
const User = require('../models/users')


exports.connected = function(socket, data){
	console.log('player connected', data.short)
	Rooms.findOne({short: data.short}, (err, room) => {
		if (err) {
			//unknown error joining room
			return socket.emit('error-joining-room')
		}
		if (room) {	
			//join room
			socket.join(room.long)
			//send player joined message to host
			socket.broadcast.to(room.long).emit('tohost-player-joined', socket.id);
			//return room data to player
			

			User.find({}, (err, users) => {
				if (err) return socket.emit('error-joining-room')
				const dataToSend = {
					users, room
				}
				socket.emit('player-joined-room', dataToSend)
				
			})
		} else {
			//there is no host connected.  Come back later
			return socket.emit('error-joining-room-no-host')
		}

	})
}