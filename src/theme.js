import { purple } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[200],
    },
    secondary: {
      main: purple[100],
    },
    normal: {
      main: purple[500],
    },
  },
});

export default theme;
