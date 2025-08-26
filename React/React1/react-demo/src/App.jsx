import './App.css'
import Displaydata from './Components/Displaydata.jsx';
import { MyCompnent } from './Components/MyComponants.jsx';
import { MyCompnent1 } from './Components/MyComponants.jsx';
import ConditionalRendering from './Components/conditionalRendering.jsx';
import Button from './Components/Button.jsx';
import Counter from './Components/Counter/Counter.jsx';

function App() {
  
const fruits = ['Apple', 'Banana', 'Mango'];
const person ={
  name: "xxx",
  age: 25
}

const isLoggedIn = false;
const name = "xxxx";
  return (
    <>
     {/* <h1>This is react</h1>
     <MyCompnent message="Hello, I am a comp 1" />
      <MyCompnent message="Hello, I am a comp 2" />
      <MyCompnent message="Hello, I am a comp 3" />
      <MyCompnent message="Hello, I am a comp 4" />
      <MyCompnent1 message="Hello, I am a comp 5" />
      <Displaydata fruits = {fruits} person = {person}/>
      <ConditionalRendering isLoggedIn = {isLoggedIn} name = {name}/>
      <Button /> */}
      <Counter />
    </>
  )
}

export default App
