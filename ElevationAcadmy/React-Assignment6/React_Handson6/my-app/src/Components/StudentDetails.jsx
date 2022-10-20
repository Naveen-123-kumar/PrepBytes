import React from "react";

export const StudentDetails = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Course</th>
            <th scope="col">Batch</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">Naveen</td>
            <td>24</td>
            <td>MERN</td>
            <td>EA-12</td>
            <td>Edit</td>
          </tr>
          <tr>
          <td scope="row">Avinash</td>
            <td>26</td>
            <td>MERN</td>
            <td>EA-12</td>
            <td>Edit</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};
