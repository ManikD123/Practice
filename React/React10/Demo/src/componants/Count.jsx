import React, { useState } from 'react'



const Count = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
    setCount((count) => count+1)
};

    const decrementtHandler = () => {
    setCount((count) => count-1);
};

  return <>
    <div>Counter</div>
    
    <button onClick={incrementHandler}>+</button>
    <h2>Count is {count}</h2>
    <button onClick={decrementtHandler}>-</button>

    </>

}

export default Count
