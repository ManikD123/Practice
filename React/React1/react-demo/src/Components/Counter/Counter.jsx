import React from 'react'
import "./Counter.css"

const Counter = () => {
  //return <div>Counter</div>;
  let count = 0;
  const addClickHandler = (e) => {
    console.log("Add CLick called")
    count++;
    console.log(count)
  };
  const substractClickHandler = (e) => {
    console.log("Substract CLick called")
    count--;
    console.log(count)
  };
  const resetClickHandler = (e) => {
    console.log("Reset CLick called")
    count = 0;
    console.log(count)
  };
  const Increment_decrementHandler = () => { };

  return (
    <div class="container">
      <h1>Counter</h1>
      <div id="number">{count}</div>
      <div>
        Increment/Decrement By
        <input type="number" id="increment_decrement" value="1" onChange={Increment_decrementHandler} />
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
