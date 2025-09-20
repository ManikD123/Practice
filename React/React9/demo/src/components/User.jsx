import React, { useState } from 'react'

// const [data, setData] = useState([]);

const User = () => {
    return <>
        <div><h2>User Example</h2></div>
        {data.length <= 0 ? (
            <div>Loading ....</div>
        ) : (
            <div>Data ....</div>
        )
        };

    </>
}

export default User
