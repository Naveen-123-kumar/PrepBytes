
import './App.css'
import { FunctionalCom } from './Components/FunctionalCom';
import {ClassCom} from './Components/ClassCom.js'
function App() {


  return (
    <div className="App">
     <div className='heading'>Styling Using Functional and Class Component</div>
    <div className='buttonContainer'>
        <button onClick={()=>{}}>Div by using Functional Component</button>
        <button>Div by using Class Component</button>

    </div>
    <div className='componentContainer'>
    <FunctionalCom/>
    <ClassCom/>
    </div>

    </div>
  );
}

export default App;
