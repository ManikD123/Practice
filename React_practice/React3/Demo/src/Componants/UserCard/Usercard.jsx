import React, { useState } from 'react'

const Usercard = ({ user }) => {

  const [showEmail, setShowEmail] = useState(false);
  const HandleSHowEmail = () => {
    setShowEmail((prev) => !prev);
  };

  
  return (
    <div style={{
      border: "1px solid black",
      padding: "20px",
      borderRadius: "8px"
    }}>

      <img src={user?.picture?.large}
        alt={user?.name?.first_name} 
        style={{borderRadius: "50%"}}/>
      <h2>{user?.name?.first_name} {user?.name?.Last_name}</h2>
      <div style={{ display: 'flex', justifyContent: "center"}}>
        <p>Age :  </p>
        <p> {user?.dob?.age} ({user?.dob?.age < 18 ? "Minor" : "Adult"})</p>
      </div>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <p>{user?.location?.city}, </p>
        <p>{user?.location?.country}</p>
      </div>

      {showEmail === true ? <p>{user?.email}</p> : <p></p>}
      <button onClick={HandleSHowEmail}>{showEmail === true ? "Hide Email" : "SHow Email"}</button>

    </div>
  )
}

export default Usercard
