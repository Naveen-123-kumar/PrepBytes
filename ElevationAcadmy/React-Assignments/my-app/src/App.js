import "./App.css";
import React,{useState} from "react";
import { FunctionalCom } from "./Components/FunctionalCom";
import { ClassCom } from "./Components/ClassCom.js";
function App() {
  const [state,setState]=useState(false);
  const [state1,setState2]=useState('false');

  function handleChange1(){
    setState(!state)
  }
  function handleChange2(){
setState2(!state1)
  }
  return (
    <div className="App">
      <div className="heading">
        Styling Using Functional and Class Component
      </div>
      <div className="buttonContainer">
        <button onClick={handleChange1}>Div by using Functional Component</button>
        <button onClick={handleChange2}>Div by using Class Component</button>
      </div>
      <div className="componentContainer">
        {state &&  <FunctionalCom />}
        {state1 && <ClassCom />}
        
      </div>
    </div>
  );
}


export default App;
