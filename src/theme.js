import { createTheme, adaptV4Theme } from "@mui/material/styles";

// Centralized color tokens — import `colors` where needed instead of hardcoding hex values
export const colors = {
  primary: "#8B7355",       // accent (muted gold)
  primaryHover: "rgba(139, 115, 85, 0.2)",
  border: "#E8E4DC",        // borders, dividers
  bg: "#FAFAF8",            // main background (off-white)
  bgAlt: "#F5F2EC",         // placeholder / card alt background
  bgChip: "#F0EDE6",        // skill pill background
  text: "#1A1A1A",          // primary text (near-black)
  textSub: "#888888",       // secondary text (grey)
  textLight: "#FAFAF8",     // light text on dark backgrounds
  overlay: "rgba(26, 26, 26, 0.5)", // hero overlay
};

const theme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.border,
    },
    background: {
      default: colors.bg,
    },
    text: {
      primary: colors.text,
      secondary: colors.textSub,
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
