
import React from 'react'
import { useState } from 'react'



const RenderingLists = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "item one"
        },
        {
            id: 2,
            checked: false,
            item: "item two"
        },
        {
            id: 3,
            checked: true,
            item: "item three"
        }
    ])

    // const renderList = (lists) =>{
    //     lists.map(list => {
    //         return list;
    //     }) 
    // } 

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <input type="checkbox" checked = {item.checked} readOnly/>
                        <label >{item.item}</label>
                        <button>delete</button>
                    </li>
                ))}
            </ul>            
        </ main>
    )
}

export default RenderingLists