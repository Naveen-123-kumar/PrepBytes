import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
export const Handson3 = () => {
  const [value, setValue] = useState({ name: "", department: "", rating: "" });
  const [arr, setArr] = useState([]);
  const [visible,setVisible]=useState(true);
  let handleChange = (e) => {
    let name = e.target.name;
    let inputValue = e.target.value;
    setValue({ ...value, [name]: [inputValue] });
  };
  const submitted = (e) => {
    e.preventDefault();
    setArr([...arr, { ...value }]);
    setVisible(!visible);
  };
  const Goback=()=>{
    setVisible(!visible);
  }
  return (
    <>
    {visible ?  <div>
        <h6 className="bg-info py-4 mt-2">Employee data</h6>
        <div
          className="border rounded w-75 m-auto rounded bg-primary mt-5 text-light text-center d-flex justify-content-around flex-wrap p-2"
          style={{ minHeight: "25vh" }}
        >
          {arr.map((ele) => (
            <h6 className="bg-success border rounded p-3">
              Name : {ele.name} | Department : {ele.department} | Rating :
              {ele.rating}
            </h6>
          ))}
        </div>
        <Button className="btn btn-success mt-4" onClick={Goback}>Go Back</Button>
      </div>:<div>
      <h1 className="text-center m-4 border rounded bg-primary">
        EMPLOYEE FEEDBACK FORM
      </h1>
      <div
        className="border rounded w-50 m-auto bg-info "
        style={{ height: "50vh" }}
      >
        <Form
          className="d-flex  flex-column justify-content-around "
          onSubmit={submitted}
        >
          <div
            className=" text-center g-col-4 d-flex  flex-column justify-content-around "
            style={{ height: "40vh" }}
          >
            <div className="g-row-4 d-flex justify-content-around">
              <label className="g-row-4 g-col-4">
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="g-col-4 g-row-4">
              <label>
                Department:
                <input
                  type="text"
                  name="department"
                  placeholder="Enter your departmentName"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="g-col-4 g-row-4">
              <label>
                Rating:
                <input
                  type="text"
                  name="rating"
                  placeholder="Enter your rating"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <input type="submit" value="Submit" onClick={submitted}/>
            </div>
          </div>
        </Form>
      </div>
    </div>
    } 
    </>
  );
};