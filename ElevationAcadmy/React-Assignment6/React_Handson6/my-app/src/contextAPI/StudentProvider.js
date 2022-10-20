import { useState } from "react";
import studentContext from "./StudentContext";

const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState([]);

  function add(data) {
    setStudent((student) => [...student, data]);
  }

  function remove(id) {
    const data = student.filter((item) => item.id !== Number(id));
    if (data) {
      setStudent((student) => [data]);
    }
  }
  function update(id, data) {
    let arr = [...student];
    const indexOf = arr.findIndex((item) => item.id === Number(id))
    arr[indexOf]=data;
    setStudent(arr);
   
  }

  return (
    <studentContext.Provider value={{ student, add, update, remove }}>
      {children}
    </studentContext.Provider>
  );
};

export default StudentProvider;
