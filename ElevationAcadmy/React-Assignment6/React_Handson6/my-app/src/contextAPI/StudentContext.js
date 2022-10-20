import { createContext } from "react";

const initialState = {
    student : [],
    add: ()=>{},
    remove : ()=> {},
    update: ()=>{}
}

const studentContext = createContext(initialState);


export default studentContext;
