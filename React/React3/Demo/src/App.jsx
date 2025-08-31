import './App.css'
import Products from './Components/Data/product_data';
import user from './Components/Data/user_data';
import Product from './Components/Products/Product';
import UserCard from './Components/UserCard/UserCard';


function App() {

  return (
    <>
      <UserCard user={user}/>
      <Product products={Products}/>
    </>
  )
}

export default App
