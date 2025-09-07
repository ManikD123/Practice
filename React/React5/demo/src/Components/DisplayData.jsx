import React from 'react'

const DisplayData = ({data, fruits}) => {
  return (
    <div>
      {data.name.map((n, index) => (
        <p key={index}>
            {n} {data.last_name[index]} - {data.roll_no[index]}
        </p>
      )) }
      <h2> Fruits List :</h2>
      <ul>
        {fruits.map((fruit, index) => {
            return <li key={index}>{fruit}</li>
        })}
      </ul>
    </div>
    
  )
}

export default DisplayData
