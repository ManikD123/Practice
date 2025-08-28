import './App.css'
import Counter from './Components/Counter/Counter.jsx';
import user from './Components/Data/User.js';
import UserCard from './Components/UserCard/UserCard.jsx';

function App() {

  return (
    <>
      <Counter />
      <UserCard user={user}/>
    </>
  )
}

export default App
