import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import studentContext from "../contextAPI/StudentContext";

export default function UpdateForm(props) {
  const [value, setValue] = useState({});
  const navigate = useNavigate();
  const { update, student } = useContext(studentContext);

  // console.count("Update form outside useEffect")
  
  let _id = useParams();
  useEffect(() => {
    // setTimeout(() => {
      const data = student.find((item) => item.id === Number(_id.id));
      if (data) {
        setValue(data);
      }
    // }, 2000);
    // console.count("Update form inside useEffect")
  }, []);

  const handleChange = (e) => {
    let inputValue = e.target.value;
    let name = e.target.name;
    setValue({ ...value, [name]: inputValue });
  };
  const submitted = (e) => {
    e.preventDefault();
    // setArr([...arr, { ...value }]);
    // setVisible(!visible);

    update(_id.id, value);
    navigate("/students");
  };

  const goBack = () => {
    navigate("/students");
  };

  return (
    <div>
      <Form onSubmit={submitted}>
        <div
          className="d-flex flex-column justify-content-around m-auto"
          style={{ height: "60vh", width: "80vw" }}
        >
          <div className="row">
            <div className="col ">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                value={value.name}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                name="age"
                placeholder="Age"
                value={value.age}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Course"
                name="course"
                value={value.course}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Batch"
                name="batch"
                value={value.batch}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <input
              type="button"
              value="Cancel"
              className="btn btn-secondary px-5 "
              onClick={goBack}
            />
            <input
              type="button"
              value="Update"
              className="btn btn-primary px-5 mx-5"
              onClick={submitted}
            />
          </div>
        </div>
      </Form>
    </div>
  );
}
