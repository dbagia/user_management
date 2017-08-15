export const uMSReducer = (state, action) => {
    switch (action.type) {
    case 'ADD_USER':
    {
        return Object.assign({}, state, {
            users: [
                ...state.users,
                {
                    id: Math.random().toString(36).substr(2, 4),
                    name: action.name
                }
            ]
        })
    }
    case 'ADD_GROUP':
    {
        return Object.assign({}, state, {
            groups: [
                ...state.groups,
                {
                    id: Math.random().toString(36).substr(2, 4),
                    name: action.name
                }
            ]
        })
    }
    default:
    {
        return state
    }
    }
}