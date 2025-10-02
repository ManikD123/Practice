import React, { useState } from 'react'

const ShowHideDetails = () => {

    const [visible, setVisible] = useState(true)

    return (
        <div style={{padding: "10px"}}>
            <button onClick={() => setVisible((prev) => !prev)}>
                {visible ? "Hide" : "Show"}
            </button>
            <div>

            </div>
            {visible && <p>Hello World!!</p>}
        </div>



    )
}

export default ShowHideDetails
