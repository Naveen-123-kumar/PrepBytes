import logo from "./logo.svg";
import "./App.css";
import NavScrollExample from "./Component/Navbar";
import { Home } from "./Pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Player from "./Pages/Player";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <>
    <BrowserRouter>
    <NavScrollExample />
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
