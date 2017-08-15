
/*import React from 'react'*/
import { Items } from '../utilities/list_of_items'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    
    return {
        items:state.groups
    }
}

const GroupList = connect(mapStateToProps)(Items)

export default GroupList
