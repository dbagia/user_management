import { Route } from 'react-router-dom'
import UserList from './manage-users/user_list.jsx'
import Users from './manage-users/index.jsx'
import GroupList from './manage-groups/group_list.jsx'
import Wrapper from './manage-groups/group_details.jsx'
import React from 'react'


const Routes = () => {
    return (
        <div>            
            <Route exact path='/' component={Users}/>
            <Route exact path='/groups' component={GroupList}/>
            <Route path='/group/:id' component={Wrapper}/>
        </div>
    )
}

export default Routes