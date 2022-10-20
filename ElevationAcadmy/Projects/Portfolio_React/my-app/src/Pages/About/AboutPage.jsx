import { Box } from '@mui/material'
import React from 'react'
import Image1 from "../../Assets/image3.png";

export default function AboutPage() {
  return (
    <>
    <Box sx={{display:{md:'flex'},justifyContent:{md:'space-between'},width:{md:'86vw',xs:'98vw'},margin:'auto'}}>
      <Box sx={{
            width: { md: "40vw", xs: "160vw" },
            height: { md: "80vh", xs: "15vh" },
            backgroundImage: `url(${Image1})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}>

      </Box>
      <Box sx={{width: {md:'45vw'},height:{md:'70vh'},display:'flex',flexDirection:{md:'column'},justifyContent:{md:'space-evenly'}}}>
      <h1>About Me</h1>
        <Box>
          I am a web designer and FullStack Developer experiance of 6 Months.A passionate, highly motivated, level student with keen interest in learning, developing skills in full-stack web applications using React js as frontend and Nodejs as backend. Competent to perform with either group or freely and self-managing.I am good in Reactjs with CSS Library Bootstrap and Material ui.I have completed my BTech from Indian Institute of Information Technology Kalyani,West Bengal in 2020.My branch in Computer Science and Engineering.
        </Box>
        <h4>I am seeking for job in this perticular area so that I can give something better to the company and also want to keep learning new Technology in parallel.</h4>
      </Box>
    </Box>
    </>
  )
}
