
import './App.css'
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import PageNotFound from './Pages/PageNotFound';
import WatchList from './Pages/WatchList';
import {Routes, Route} from "react-router-dom";


function App() {

  return (
    // <h1 class="text-5xl font-bold underline rounded-lg m-5 p-3 bg-gray-600 text-gray-200">
    //   Hello world!
    // </h1>
    <>
      <NavBar />
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/home"  element= {<Home />}/>
        <Route path="/watchlist"  element= {<WatchList />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
    );
}

export default App
