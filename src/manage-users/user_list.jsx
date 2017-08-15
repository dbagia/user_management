/*import React from 'react'*/
import { Items } from '../utilities/list_of_items'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    
    return {
        items:state.users
    }
}

const UserList = connect(mapStateToProps)(Items)

export default UserList
