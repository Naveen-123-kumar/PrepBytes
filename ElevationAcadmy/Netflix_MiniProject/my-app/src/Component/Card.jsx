import React from "react";
export const Card = (props) => {
  return (
    <>
      <a href="" className="card">
        <img src={props.img} className="card__image" alt="Wrong url" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="card__thumb"
              src="https://i.imgur.com/7D7I6dI.png"
              alt=""
            />
            <div className="card__header-text">
              <h3 className="card__title">{props.name}</h3>
              <span className="card__status">{props.time} hour ago</span>
            </div>
          </div>
          <p className="card__description">{props.description}</p>
        </div>
      </a>
    </>
  );
};
