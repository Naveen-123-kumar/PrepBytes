import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import { Home } from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Player from "./Pages/Player";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/Player' element={<Player/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
