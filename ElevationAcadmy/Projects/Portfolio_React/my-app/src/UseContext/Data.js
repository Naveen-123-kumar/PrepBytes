import { createContext } from "react";

const data={
    Navbar:[
    { title: "Home", location: "/" },
    { title: "About", location: "/about" },
    { title: "Project", location: "/project" },
    { title: "Education", location: "/education" },
    { title: "Skill", location: "/skill" },
    { title: "Contact", location: "/contact" },
    ],
  
}
export const Datacontext=createContext(data)


export default function Data({children}) {
  return (
    <Datacontext.Provider value={data}>{children}</Datacontext.Provider>
  )
}
