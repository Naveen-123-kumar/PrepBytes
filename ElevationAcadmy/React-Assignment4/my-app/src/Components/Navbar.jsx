import React from "react";
import { Link } from "react-router-dom";
function Navbar1() {
  return (
    <>
      <div className="d-flex justify-content-evenly fst-italic fs-2 bg-primary p-2">
        <Link to="/">
          <div className="text-white text-decoration-none">Home</div>
        </Link>
        <Link to="/students">
          <div className="text-white text-decoration-none">Students</div>
        </Link>
        <Link to="/contactus">
          <div className="text-white text-decoration-none">Contact Us</div>
        </Link>
      </div>
    </>
  );
}

export default Navbar1;
