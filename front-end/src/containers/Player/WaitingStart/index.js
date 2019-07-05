import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ReactComponent as User } from 'assets/images/svg/user.svg'
import './style.scss'
import { Button } from 'components'



class WaitingStart extends Component {

	onClick(){
		this.props.push('/p/select-team')
	}
	render(){
		const { users } = this.props
		return(
			<div className="playerWaitingStartContainer">
				<div className="userNumberContainer">
					<User className="userIcon" />
					<p className="userNumbers">{users ? users.length : 0}</p>
				</div>
				<Button text="Select team" onClick={this.onClick.bind(this)}/>
			</div>

		)
	}
}

const mapStateToProps = state => ({
	users: state.player.users,
	usersSelected: state.player.usersSelected
})

const mapDispatchToProps = dispatch => bindActionCreators({
	//
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaitingStart)