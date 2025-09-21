import React from 'react'

const DisplayData1 = ({fruits, person}) => {
    return (
        <div>
            <h2> Fruits List: </h2>
            <ul>
                {fruits.map((fruit, index) => {
                    return <li key={index}> {fruit} </li>
                })}
            </ul>

            <h2> person Name</h2>
            <p> Name: {person?.name} </p>
            <p>age: {person?.age} </p>

        </div>
    )
}

export default DisplayData1
