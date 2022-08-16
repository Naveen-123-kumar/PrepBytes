import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import { HomeCom } from "./Components/HomeCom";
import Students from "./Components/Students";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeCom />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
