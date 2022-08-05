import React,{ useState} from "react";
import "../App.css";
import { Card } from "../Component/Card";
import { movie_data } from "../Data";
export const Home = () => {
  // const [counter,setCounter]=useState(0)
  // const handlechange=()=>{
  //   setCounter(counter+1)
  // }
  // const handlechange1=()=>{
  //   setCounter(counter-1);
  // }
  return (
    <>

    {/* <div>{counter}</div>
    <button onClick={handlechange}>click me+</button>
    <button onClick={handlechange1}>Click Me-</button> */}

    {/* <div style={{backgroundColor:'red',margin:'auto',paddingLeft:'40%'}}>
    <input type="text" />
    </div> */}

    <div className="container mt-4 mb-4 cardContainer">
      {movie_data.map((val) => {
      
        return (
          <Card
            name={val.name}
            time={val.time}
            img={val.img}
            description={val.description}
          />
        );
      })}
    </div>
    </>

  );
};
