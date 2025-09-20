import React, { useState } from 'react'

const Login = () => {

    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");


    const clickHandler = (e) => {
        e.preventDefault();
        window.alert(userName, password);
    };
    return <>
        <div>Login Test</div>
        <div>
            <label style={{ margin: "20px" }}>UserName</label>
            <input
                placeholder='Enter Name'
                type="text"
                value={userName}
                onChange={(e) => {
                    setuserName(e.target.value);
                }}
            >
            </input>
            <label style={{ margin: "20px" }}>Password</label>
            <input
                
                placeholder='Enter Password'
                type='password'
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            >

            </input>
        </div>
        <button 
        onClick={clickHandler}
        style={{margin: "20px"}}
        disabled={!userName || !password}
        >Sumbit
        </button>

    </>
}

export default Login
