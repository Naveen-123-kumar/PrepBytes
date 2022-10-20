import { Box, Button } from "@mui/material";
import React from "react";
import Image1 from "../../Assets/intro.png";
export default function HomePage() {
  return (
    <>
      <Box
        sx={{ height: { md: "90vh", xs: "50vh" }, bgcolor: "rgb(27, 131, 97)" }}
      >
        <Box
          sx={{
            width: { md: "96vw", xs: "160px" },
            height: { md: "80vh", xs: "15vh" },
            backgroundImage: `url(${Image1})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Box
            sx={{
              height: "80vh",
              width: "82vw",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: "50vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Box>
                <Box sx={{ fontSize: { xs: "1.5rem", md: "3rem" } }}>
                  Hi, I am Naveen Kumar
                </Box>
                <Box
                  sx={{
                    color: "rgb(166, 255, 0)",
                    fontSize: { xs: "1.5rem", md: "2.5rem" },
                  }}
                >
                  FullStack MERN Developer
                </Box>
              </Box>

              <Box sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}>
                Get ready to turn ideas into reality.
              </Box>
              <Box>
                <Button variant="contained">Hire Me</Button>
                <Button variant="contained" color="success" id="btn-left">
                  Get Resume
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
