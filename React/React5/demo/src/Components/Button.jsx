import React from 'react'

const Button = () => {

    const handleButton = () => {
        console.log("Button is clicked");
    };

    return (
        <div>
            <button style={{border: "2px solid black" }} onClick={handleButton}>
                Count Button
            </button>
        </div>
    )
}

export default Button
