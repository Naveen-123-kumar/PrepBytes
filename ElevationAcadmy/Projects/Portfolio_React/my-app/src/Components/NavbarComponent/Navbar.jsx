import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import React, { useContext } from "react";
import { Datacontext } from "../../UseContext/Data";
import MenuIcon from "@mui/icons-material/Menu";


const Navbar = () => {
const data = useContext(Datacontext);
const [Open, setOpen] = React.useState(null);
const handleOpenNavMenu = (event) => {
    setOpen(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setOpen(null);
  };
  return (
    <>
      <Grid container>
        <Grid item lg={12} xs={12}>
          <Box
            sx={{
              bgcolor: "rgb(242, 234, 234)",
              color: "green",
              height: { xs: "8vh", md: "10vh" },
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: { xs: "100vw", md: "50vw" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h3">Naveen Kumar</Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "flex" },
                justifyContent: { xs: "space-between", md: "none" },
              }}
            >
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  paddingRight: { xs: "20px", md: "none" },
                }}
              >
                <IconButton
                  size="large"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={Open}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(Open)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {data.Navbar.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Link
                        to={page.location}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          textAlign="center"
                          style={{ textDecoration: "none" }}
                        >
                          {page.title}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection={"row-start"}
              justifyContent="space-evenly"
              alignContent={"center"}
              alignItems="center"
              width={"80%"}
              mx="auto"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              
              {data.Navbar.map((item) => (
                <Box>
                  <Link to={item.location} style={{ textDecoration: "none" }}>
                    <Typography
                      textAlign="center"
                      style={{ textDecoration: "none", color: "GrayText" }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Navbar;
