
import './App.css'
import ConditionalRendering from './Components/conditionalRendering.jsx'
import DisplayData from './Components/DisplayData.jsx'
import MyComponent from './Components/MyComponent.jsx'



function App() {
  const fruits = ['apple', 'orange', 'Mango']
  const person = {
    name: "Manik",
    age: 23
  }
  return (
    <>
      <h1>React is Awesome</h1>
      <MyComponent message = "hello1"/>
      <MyComponent message = "hello2"/>
      <DisplayData fruits= {fruits} person = {person}/>
      <ConditionalRendering />
    </>
  )
}

export default App
