import React from 'react'

const ConditionalRendering = () => {
    const islogged = false;
    const name = 'XXX Manik'
  return (
    <div>
      { islogged ? <h1>{name}</h1> : <h1>"Please log in again"</h1>}
    </div>
  )
}

export default ConditionalRendering
