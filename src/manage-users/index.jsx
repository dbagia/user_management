import React from 'react'
import UserList from './user_list.jsx'
import { connect } from 'react-redux'

class NewUser extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			visible: false,
			name: '',
			group: '0000'
		}

		this.addUser = this.addUser.bind(this)
		this.saveUser = this.saveUser.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleGroupChange = this.handleGroupChange.bind(this)
	}

	addUser() {
		this.setState({
			visible: true
		})
	}

	saveUser() {
		console.warn(this.props)
		this.props.saveUser({
			name: this.state.name,
			group: this.state.group
		})
	}

	handleInputChange(e) {
		this.setState({
			name: e.target.value
		})

		console.error(this.state)
	}
	handleGroupChange(e) {
		this.setState({
			group: e.target.value
		})
	}
	render() {

		let addUser = <button onClick={this.addUser}>Add User</button>

		let form = <div>
			<div>What's your name:</div>
			<div>
				<input type='text' name='name' value={this.state.name} onChange={this.handleInputChange} />
			</div>
			<div>Select your group:</div>
			<select defaultValue={this.state.group} onChange={this.handleGroupChange}>
				{
					this.props.groups.map((group) => {
						return <option key={group.id} value={group.id}>{group.name}</option>
					})
				}
			</select>
			<div>
				<button onClick={this.saveUser}>Save</button>
			</div>
		</div>

		return this.state.visible ? <div>{addUser}{form}</div> : addUser

	}
}

const users = (props) => {
	console.error('props', props)
	return (
		<div>

			<NewUser groups={props.groups} saveUser={props.onSave} />
			<UserList />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		groups: state.groups
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSave: newUser => {
			dispatch({
				type: 'ADD_USER',
				...newUser
			})
		}
	}
}
const userWrapper = connect(mapStateToProps, mapDispatchToProps)(users)
export default userWrapper