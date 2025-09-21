import React from 'react'

const Mybutton = () => {

    const sumbitHandler = () => {
        console.log("clicked")
    };

  return  <> 
  <button onClick={sumbitHandler}>Sumbit</button>
  </>
  
}

export default Mybutton
