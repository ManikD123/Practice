import React from 'react'

const UserCard = ({ user }) => {
    let showEmail = false;
    const buttonHandler =() => {
        showEmail = !showEmail;
    }
    return <div>
        <img src={user?.picture?.large} alt={user?.picture?.name?.first} />
        <h2>
            {user?.name?.first} {user?.name?.last}
        </h2>
        <p>
            Age: {user?.dob?.age} ({user?.dob?.age >= 18 ? "Adult" : "minor"})
        </p>
        <p>
            Location: {user?.location?.city}, {user?.location?.country}
        </p>
        {ShowEmail === true ? <p>{user?.email}</p> : <p></p>}
        <button onClick={buttonHandler} >Show Email: </button>
    </div>

};

export default UserCard
