import { useState } from "react";


export default function Lists() {
    const [items, setItems] = useState([
        {
            id: 1,
            item: "item 1",
            checked: false
        },
        {
            id: 2,
            item: "item 2",
            checked: false
        },
        {
            id: 3,
            item: "item 3",
            checked: false
        }
    ])

    const handleCheck = (key) =>{
        const listItems = items.map((item) => item.id === key ? {...item, checked: !item.checked} : item )
        setItems(listItems)
    }


  return (
    <main>
        <ul>
         {items.map((item) => (
            <li className="item" key={item.id}>
                <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked}/>
                <label>{item.item}</label>
                <button>Delete</button>
            </li>
         ))}
        </ul>
    </main>
  )
}
