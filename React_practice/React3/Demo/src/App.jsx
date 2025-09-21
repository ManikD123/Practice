
import './App.css'
import Usercard from './Componants/UserCard/Usercard'
import user from './/Componants/Data/user_data'
import Products from './Componants/Products/products'
import productData from './Componants/Data/product_data'
import Todolist from './Componants/ToDoList/Todolist'
import { useState } from 'react'

function App() {
  const componantStatus = {
    TO_DO_LIST: "Todolist",
    USER_CARD: "Usercard",
    PRODUCT_LIST: "Products",
  };

  const [showComponants, setShowComponants] = useState("Todolist");

  return (
    <><div style={{ display: "flex", padding: "10px", gap: "25px" }}>
      <button onClick={() => setShowComponants(componantStatus.USER_CARD)}>
        UserCard
      </button>
      <button onClick={() => setShowComponants(componantStatus.PRODUCT_LIST)}>
        Product_list
      </button>
      <button onClick={() => setShowComponants(componantStatus.TO_DO_LIST)}>
        To Do List
      </button>
    </div>
      <div>
        {showComponants === componantStatus.USER_CARD && < Usercard user={user} />}
        {showComponants === componantStatus.PRODUCT_LIST && <Products productData={productData} />}
        {showComponants === componantStatus.TO_DO_LIST && <Todolist />}


      </div>
    </>
  )
}

export default App
