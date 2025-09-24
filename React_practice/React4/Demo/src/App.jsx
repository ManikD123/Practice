
import { useState } from 'react'
import './App.css'
import SimpleForm from './componants/SimpleForm'
import TemperatureDIsplay from './componants/TemperatureDIsplay'
import TemperatureInput from './componants/TemperatureInput'
import UserData from './componants/UserData'

function App() {

  const [temperature, setTemperature] = useState("");

  return (
    <>
      < SimpleForm />
      <UserData />
      <TemperatureInput temperature={temperature} setTemperature= {setTemperature} />
      <TemperatureDIsplay temperature={temperature}/>
    </>
  )
}

export default App
