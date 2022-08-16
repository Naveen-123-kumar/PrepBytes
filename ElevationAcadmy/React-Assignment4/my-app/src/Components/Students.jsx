import React from "react";
import { StudentDetails } from "./StudentDetails";
export default function Students() {
  return (
    <div className="bg-light " style={{height:'100vh'}}>
      <div className="d-flex justify-content-around p-4 fs-2">
        <div>Student Details</div>
        <div>
          <button type="button" className="btn btn-primary p-2 fs-3">
            Add Student
          </button>
        </div>
      </div>
      <div className="w-75 m-auto bg-white">
        <StudentDetails/>
      </div>
    </div>
  );
}


