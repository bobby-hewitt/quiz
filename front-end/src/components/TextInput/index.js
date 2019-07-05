import React, { Component } from 'react'
import './style.scss'

export default class TextInput extends Component {
	render(){
		return(
			<div className="textInputContainer">
				<input type="text" />
			</div>
		)
	}
}