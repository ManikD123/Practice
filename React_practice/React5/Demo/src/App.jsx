import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import './App.css'
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import PagenotFound from "./components/PagenotFound"
import Users from "./components/Users"

function App() {

  return (
    <>
    <NavBar /> 
      <h1>React Router</h1>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/users/:id" element={<Users />}/>
        <Route path="*" element={<PagenotFound />} />
      </Routes>


    </>
  )
}

export default App
