import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import Routes from './routes.jsx'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { uMSReducer } from './reducers/uMSReducer'

let initialState = {
    users:[
        {
            id:'1234',
            name:'Ramesh',
            type:'user'
        },
        {
            id:'1235',
            name:'Rajesh',
            type:'user'
        },
        {
            id:'1236',
            name:'Rakesh',
            type:'user'
        }
    ],
    groups:[
        {
            id:'0000',
            name:'default',
            users:[],
            type:'group'

        },
        {
            id:'0001',
            name:'IT',
            users:[],
            type:'group'

        }
    ]
}

let store = createStore(uMSReducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes/>
        </Router>        
    </Provider>,
    document.body.appendChild(document.createElement('div'))
)