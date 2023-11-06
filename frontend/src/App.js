import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home";
import Addbook from "./components/Addbook";
import Books from "./components/Book/Books";
import About from "./components/About";
import Bookdetails from "./components/Book/Bookdetails";


function App() {
  return (
    <div >
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<Addbook/>} />
      <Route path="/books" element={<Books/>}/>
      <Route path="/aboutus" element={<About/>} />
      <Route path="/books/:id" element={<Bookdetails/>}/>
      
     </Routes>
    </div>
  );
}

export default App;
