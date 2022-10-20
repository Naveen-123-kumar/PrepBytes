import React, { useState } from "react";
import "../App.css";
import { Card } from "../Component/Card";
import { movie_data } from "../Data";
export const Home = () => {
  const [name, setName] = useState("");
  const handlechange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div style={{ margin: "auto", paddingLeft: "40%" }}>
        <label htmlFor="text" style={{ marginRight: "10px" }}>
          Search{" "}
        </label>
        <input
          type="text"
          id="text"
          placeholder="Enter here"
          onChange={handlechange}
        />
      </div>
      <div className="container mt-4 mb-4 cardContainer">
        {movie_data.map((val) => {
          if (val.name.toLowerCase().includes(name.toLowerCase())) {
            return (
              <Card
                name={val.name}
                time={val.time}
                img={val.img}
                description={val.description}
              />
            );
          }
        })}
      </div>
    </>
  );
};
