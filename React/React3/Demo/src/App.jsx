import './App.css'
import Products from './Components/Data/product_data';
import user from './Components/Data/user_data';
import Product from './Components/Products/Product';
import ToDoList from './Components/ToDoList/ToDoList';
import UserCard from './Components/UserCard/UserCard';


function App() {

  return (
    <>
      <div style={{display: 'flex'}}>

      </div>
      <UserCard user={user}/>
      <Product products={Products}/>
      <ToDoList />
    </>
  )
}

export default App
