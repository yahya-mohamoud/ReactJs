import { useState } from "react"; 

function Toggle() {
    const [ toggle, setToggle] = useState("OFF")

  return (
    <button onClick={() =>  setToggle(toggle === "ON" ? "OFF" : "ON")}>{toggle}</button>
  )
}

export default Toggle