import React from "react"

const MyComponent = ({message}) => {
    // console.log(props)
    // const message = props.message;
     console.log({message})
    return <h1>Hello I am a component test{message}</h1>
}

export default MyComponent