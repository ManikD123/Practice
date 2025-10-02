import React, { useState } from 'react'

const TabSwitch = () => {

const [activeTab, setActiveTab] = useState("Home"); // default Tab
  return (
    <div>
      <div>
      <button
      onClick={() => {setActiveTab("Home")}}
      >Home</button>
        
      <button
      onClick={() => {setActiveTab("Profile")}}
      >Profile</button>
      </div>
      <div style={{padding: "10px", border: "1px solid #ddd"}}>
      {activeTab === "Home" && <h2>Home Tab;</h2>}
      {activeTab === "Profile" && <h2>Profile Tab;</h2>}
    </div>
    </div>
    
  )
}

export default TabSwitch
