import { createTheme, responsiveFontSizes } from "@mui/material/styles";
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      bl: 1400,
      xl: 1536,
    },
  },
  pallete: {
    primary: {
      main: "#ffffff",
    },
    background: {
      paper: "#e7ebef",
      main: "#ffffff",
      avatar: "#1876d1",
    },
  },
  typography: {
    fontFamily: "Roboto",

    h1: {
      fontSize: 64,
      fontWeight: 700,
    },
    h2: {
      fontSize: 48,
    },
    h3: {
      fontSize: 34,
      fontWeight: 500,
    },
    h4: {
      fontSize: 24,
      fontWeight: 500,
    },
    h5: {
      fontSize: 18,
      fontWeight: 500,
    },

    body: {
      fontSize: 16,
      fontWeight: 400,
    },
    button: {
      fontSize: 12,
    },
    tooltip: {
      fontSize: 8,
      fontWeight: 300,
    },
  },
  shape: {
    borderRadius: 16,
    padding: "20px",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            fontSize: "17px",
            fontWeight: 500,
            minWidth: "100px",
            height: "36px",
            backgroundColor: "#ffffff",
            "&:hover": {
              backgroundColor: "#fffff6",
            },
            textTransform: "none",
            zIndex: 0,
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
