import React from 'react'

const Button = () => {
    const handleClick = () => {
        console.log("Button Clicked");
    }
    return <button onClick={handleClick}>Button</button>;
};

export default Button;
