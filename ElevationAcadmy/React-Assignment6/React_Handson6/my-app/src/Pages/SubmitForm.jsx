import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import studentContext from "../contextAPI/StudentContext";

export default function SubmitForm(props) {
  let Id = Date.now();
  const [value, setValue] = useState({ id: Id });
//   const [arr, setArr] = useState([]);
//   const [visible, setVisible] = useState(true);
  const { add } = useContext(studentContext);

  const handleChange = (e) => {
    let inputValue = e.target.value;
    let name = e.target.name;
    setValue({ ...value, [name]: inputValue });
  };
  const submitted = (e) => {
    e.preventDefault();
    // setArr([...arr, { ...value }]);
    // setVisible(!visible);
    add(value);
    props.toggle();
  };

  const goBack = () => {
    props.toggle();
    // setVisible(!visible);
  };
  return (
    <>
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
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                name="age"
                placeholder="Age"
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
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Batch"
                name="batch"
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
              value="Submit"
              className="btn btn-primary px-5 mx-5"
              onClick={submitted}
            />
          </div>
        </div>
      </Form>
    </>
  );
}
