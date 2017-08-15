import React from 'react'
import './list_of_items.css'
import { Link } from 'react-router-dom'

const List = props => {
    
    return (
        <ul>
            {props.items.map((item, index)=>{
                return (
                    <li key={index}>
                        <Link to={'/'+item.type+'/'+item.id}>
                            {item.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export const Items = (props) => {
    //console.error('props.items',props.items)
    return (
        <div>
            <List items={props.items}/>            
        </div>
    )   
}