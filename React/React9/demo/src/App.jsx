
import './App.css'
import Counter from './components/Counter'
import CounterRedux from './components/CounterRedux'
import ToDoList from './components/TOdoList'
import User from './components/User'

function App() {

  return (
    <>
      {/* <Counter /> */}
      <CounterRedux />
      <ToDoList />
      {/* <User /> */}
    </>
  )
}

export default App
