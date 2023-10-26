import { pink, purple } from "@mui/material/colors";
import { createTheme, adaptV4Theme } from "@mui/material/styles";

const theme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: purple[400],
    },
    secondary: {
      main: purple[100],
    },
  },
}));

export default theme;
