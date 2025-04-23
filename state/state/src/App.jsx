import { useState } from "react";

export default function App () {
  const [count, setCount] = useState(0)
 
  return  (
    <div className="btn" >
        <h1>Counter App</h1>
        <div className="flex" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
        <button onClick={() => {setCount(count - 1)}} style={{height: '30px'}}>minus me</button>
        <h1>{count}</h1>
        <button onClick={() => {setCount(count + 1)}} style={{height: '30px'}}>add me</button>
        </div>
    </div>
  )
}