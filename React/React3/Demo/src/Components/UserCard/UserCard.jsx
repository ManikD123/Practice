import React, {useState} from 'react'

const UserCard = ({ user }) => {
    const [showEmail, setShowEmail] = useState(false);
    const ButtonListener = () => {
        setShowEmail((prev) => !prev);
        //console.log(showEmail);
    };
   // console.log(user)
    return (
        <div style = {{
            border: "1px solid blue",
            padding: "20px",
            borderRadius: "8px",
            

        }}> 
            <img src={user?.picture?.large}
                alt={user?.name?.first_name}
                style={{ borderRadius: "50%" }}
            />

            <h2>{user?.name?.first_name} {user?.name?.Last_name}</h2>
            
            <h2>{user?.dob?.age} ({user?.dob?.age > 15 ? "Adult" : "minor"})</h2>

            <p>{user?.location?.city}, {user?.location?.country}</p>

            {showEmail === true ? <p>{user?.email}</p> : <p></p>}
            <button className="show_email" onClick={ButtonListener}>{showEmail ? "Hide EMail" : "SHow Email"}</button>
            


        </div>
    )
}

export default UserCard
