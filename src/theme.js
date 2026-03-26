import { createTheme, adaptV4Theme } from "@mui/material/styles";

const theme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: "#8B7355",
    },
    secondary: {
      main: "#E8E4DC",
    },
    background: {
      default: "#FAFAF8",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#888888",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Cormorant Garamond', serif" },
    h2: { fontFamily: "'Cormorant Garamond', serif" },
    h3: { fontFamily: "'Cormorant Garamond', serif" },
    h4: { fontFamily: "'Cormorant Garamond', serif" },
    h5: { fontFamily: "'Cormorant Garamond', serif" },
    h6: { fontFamily: "'Cormorant Garamond', serif" },
  },
}));

export default theme;
