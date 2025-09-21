
import './App.css'
import DisplayData1 from './assets/componants/DisplayData1';
import Mycomponant from './assets/componants/Mycomponant'
import Mybutton from './assets/componants/button'
import ConditionalStatement1 from './assets/componants/conditionalStatement1';


function App() {
  
  const message = "My name is Dolai";

  const fruits = ['Apple', 'Orange', 'Banana'];
  const person = {
    name: "Manik",
    age: 26
  };

  const isLoggedin = true;

  return (
    <>
      <Mycomponant message={message} />
      <Mybutton />
      < DisplayData1 fruits = {fruits} person={person}/>
      < ConditionalStatement1 isLoggedin={isLoggedin}/>
    </>
  )
}

export default App
