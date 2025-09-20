import React from 'react'
import { useState } from 'react'


const Counter = () => {

    const [Count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(Count + 1)
    }

    const handleDecrement = () => {
        setCount(Count - 1)
    }
  return (
    <>

      <button onClick={handleIncrement}>+</button>
      <h3>{Count}</h3>
      <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default Counter
