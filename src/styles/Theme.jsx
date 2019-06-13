import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const Theme = createMuiTheme({
  typography: {
    fontSize: 12
  },
  palette: {
    primary: {
      main: "#443699",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "rgb(29, 191, 115)",
      contrastText: "#ffffff"
    }
  },
  status: {
    danger: red[500]
  }
});
