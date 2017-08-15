import { json } from '../src/util/commons'
import { task } from 'folktale/concurrency/task'

describe('Utilities', ()=>{
    it('should load users', done => {
        const getJSON = url => task(
            resolver => {
                json(url).then((response)=>{                    
                    response.status >= 400 ?resolver.reject("Error"+response.status):resolver.resolve(response.json())
                    done()
                })                     
            }
        )

        getJSON('http://localhost:8080/users1').run().promise().then((users)=>{
            console.log(users)
        },(err)=>console.log(err))
               
    })
})