import './App.css'

// function ListItems (props) {
//   return <li>{props.animal}</li>
// }

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key= {animal}>{animal}</li> : null;
      })}
    </ul>
  )
}

function App() {
  const animals = ['Tiger', 'Lion', 'Monkey', 'Cow', 'Dog'];
  
  return (
    <>
   <h1>animals: </h1>
    <List animals= {animals} />
    </>
  )
}



export default App
