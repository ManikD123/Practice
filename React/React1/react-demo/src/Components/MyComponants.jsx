import React from "react";

/*export const MyCompnent = (props) => {
    return <h1>Hello, I am from Componant</h1>
}*/
// destructuring
export const MyCompnent = ({message}) => {
    return <h1>{message}</h1>
}

export const MyCompnent1 = ({message}) => {
    return <h1>Hello,{message}</h1>
}

//export default MyCompnent; 