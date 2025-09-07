
import './App.css'
import { Route, Routes, Navigate } from "react-router-dom";
import Contact from './componants/Contact'
import Home from './componants/Home'
import Project from './componants/Project'
import About from './componants/About'
import NavBar from './componants/NavBar'
import NotFound from './componants/NotFound'
import Users from './componants/Users'

function App() {
  return (
    <>

      <h1>React Router</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<Users />}/>
        <Route path="login" element={<Navigate to={"/home"}></Navigate>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>

    </>
  )
}

export default App
