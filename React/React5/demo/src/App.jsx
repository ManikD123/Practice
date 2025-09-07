
import './App.css'
import Button from './Components/Button'
import ConditionalRendering from './Components/ConditionalRendering'
import DisplayData from './Components/DisplayData'
import MyComponants from './Components/MyComponants'

function App() {

  const data = {
    name: ["Manik", "sonali"], 
    last_name: ["","jaiswal"],
    roll_no: [25, 27, 28],
  }
  const isloggedIn = true;
  const name = "Manik";
  const fruits = ["mango", "strawberry", "apple"];

  return (
    <>
      {/* <Button />
      <MyComponants message= "My name is manik"/> */}
      <DisplayData data= {data} fruits ={fruits}/>
      <ConditionalRendering isloggedIn= {isloggedIn} name = {name}/>
    </>
  )
}

export default App
