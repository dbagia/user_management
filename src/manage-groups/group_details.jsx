import React from 'react'
import { Items } from '../utilities/list_of_items'
import { connect } from 'react-redux'

const getGroupDetails = (state, groupId) => {

	let group = state.groups.filter(g=>g.id === groupId)

	return {
		id: group[0].id,
		name: group[0].name,
		users: users(state, group[0].users)
	}
}

const users = (state, ids) => {
	
	return state.users.filter((user)=>{		
		return ids.indexOf(user.id) >= 0
	})
}

const mapStateToProps = (state, ownProps) => {

    return {
        details:getGroupDetails(state, ownProps.id)
    }
}

const VisibleGroupDetails = (props) => {

	return (
		<div>
			<div>
				Name: {props.details.name}
			</div>
			<div>
				Users: <Items items={props.details.users}/>
			</div>
		</div>
	)
}

const GroupDetails = connect(mapStateToProps)(VisibleGroupDetails)

const Wrapper = (props) =>{

	return (
		<GroupDetails id={ props.match.params.id }/>
	)
}
export default Wrapper