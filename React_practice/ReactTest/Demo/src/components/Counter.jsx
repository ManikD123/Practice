import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const Increment = () => {
        setCount(prev => prev + 1);
    };
    const Decrement = () => {
        if(count === 0) {
            alert("Count cannot be less than Zero")
        } else 
        {setCount(prev => prev - 1);}
    };

    const resetToZero = () => {
        setCount(0)
    };

    return (
        <div style={{ margin: "10px" }}>
            <h1>Counter</h1>
            <div>{count}</div>

            <button onClick={Increment} style={{ margin: "10px" }}>+</button>
            <button onClick={Decrement} style={{ margin: "10px" }}> -</button>
            <button onClick={resetToZero}>Reset</button>
        </div>
    )
}

export default Counter
