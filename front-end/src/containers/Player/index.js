import React, { Component } from 'react'
import SocketListener from '../SocketListener'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { User, Button } from 'components'
import { toggleUserSelect } from 'actions/player'
import { Route } from 'react-router'
import './style.scss'
import NameTeam from './NameTeam'
import SelectTeam from './SelectTeam'
import WaitingStart from './WaitingStart'


class Player extends Component {

	onClickUser(index){
		this.props.toggleUserSelect(index)
	}

	changeScene(path){
		this.props.push(path)
	}
	render(){
		const { users, usersSelected }= this.props
		const isBlue = window.location.pathname === '/p'
		return(
			<div className="playerContainer">
				<SocketListener />
				
					<div className={`blueBackground ${isBlue && 'isVisible'}`}/ >
						<div className="routeContentContainer">
						<Route exact path="/p" render={() => <WaitingStart push={this.changeScene.bind(this)}/>} />
						<Route path="/p/select-team" render={() => <SelectTeam push={this.changeScene.bind(this)}/>} />
						<Route path="/p/name-team" render={() => <NameTeam push={this.changeScene.bind(this)}/>} />
						</div>
					
				
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
)(Player)