import React, { useState } from 'react'

const conditionalStatement1 = () => {

  const [log, setLog] = useState(true)

  const HandleLogin = () => {
    setLog(prev => !prev)
  };
  return (
    <div>
      {log ? <h1>Love you Sona </h1> : <h1>Love you Goli meri Biwi</h1>}
      <button onClick={HandleLogin}>Click</button>
    </div>
  )
}

export default conditionalStatement1
