import './App.css'
import user from './Components/Data/user_data';
import UserCard from './Components/UserCard/UserCard';

function App() {

  return (
    <>
      
      <UserCard user={user}/>
    </>
  )
}

export default App
