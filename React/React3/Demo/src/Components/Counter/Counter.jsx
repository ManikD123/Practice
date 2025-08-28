import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0);
    const [ince_decre, setIncreDement] = useState(1);
    //return <div>Counter</div>;
    const addClickHandler = (e) => {
        //console.log("Add CLick called")
        //count++;
        // console.log(setCount)
        // setCount(count + 1);
        //setCount(count + ince_decre);
        setCount((PrevStateCalueForCount) => {
            return PrevStateCalueForCount + ince_decre;
        })
        console.log(count)
    };
    const substractClickHandler = (e) => {
        //console.log("Substract CLick called")
        //count--;
        //setCount(count - 1);
        //setCount(count - ince_decre);
        setCount((PrevStateCalueForCount) => {
            return PrevStateCalueForCount - ince_decre;
        })
        console.log(count)
    };
    const resetClickHandler = (e) => {
       // console.log("Reset CLick called")
        // count = 0;
        setCount(0);
        console.log(count)
    };
    const Increment_decrementHandler = (e) => { 
        //console.log(e);
        //console.log(e.target.value)
        setIncreDement(parseInt(e.target.value))
    };

    return (
        <div className="container">
            <h1>Counter</h1>
            <div id="number">{count}</div>
            <div>
                Increment/Decrement By
                <input type="number"
                    id="increment_decrement"
                    value={ince_decre}
                    onChange={Increment_decrementHandler} />
            </div>
            <div>
                <button id="add" onClick={addClickHandler}>+</button>
                <button id="subtract" onClick={substractClickHandler}>-</button>
            </div>
            <button id="reset" onClick={resetClickHandler}>Reset</button>
        </div>
    );
}

export default Counter;
