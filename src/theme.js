import { pink, purple } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[400],
    },
    secondary: {
      main: purple[100],
    },
  },
});

export default theme;
