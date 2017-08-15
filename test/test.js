import { createStore } from 'redux'
import { uMSReducer } from '../src/reducers/uMSReducer'
let store = createStore(uMSReducer)

describe('Utilities', ()=>{
    it('should add a new user', done => {
        
        store.dispatch({
            type:'ADD_USER',
            name:'Priti'
        })
        
        console.log(store.getState())
        done()
    })

    it('should add a new group', done => {
        
        store.dispatch({
            type:'ADD_GROUP',
            name:'Marketing'
        })
        
        console.log(store.getState())
        done()
    })
})