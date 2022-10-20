import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes} from "@mui/material";
const Theme = responsiveFontSizes(
  createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#004AAD",
      },
      secondary: {
        main: "#FA8334",
      },
      warning: {
        main: "#9C27B0",
      },
    },
    typography: {
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      },
      h2: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      },
      h3: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      },
      h4: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      },
      h5: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      },
      body1: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      },
      body2: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      },
      button: {
        fontFamily: '"Source Sans Pro", "Helvetica", "Arial", sans-serif',
      },
    },
  })
);

export default Theme;
