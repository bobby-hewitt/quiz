import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.scss'
import { BackButton, Button, TextInput } from 'components'



class NameTeam extends Component {

	onContinue(){
		this.props.push('/waiting')
	}
	render(){
		return(
			<div className="nameTeamContainer">
				<BackButton />
				<h4 className="title">Give your team a name</h4>
				<TextInput />
				<Button text="Let's go" onClick={this.onContinue.bind(this)}/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	users: state.player.users,
	usersSelected: state.player.usersSelected
})

const mapDispatchToProps = dispatch => bindActionCreators({
  push: (path) => push(path),
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameTeam)