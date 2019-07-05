import React, { Component } from 'react'
import './style.scss'
import SocketListener from '../SocketListener'
export default class Host extends Component {
	render(){
		return(
			<div>
			<SocketListener isHost/>
			<h1>Host</h1>
			</div>
		)
	}
}