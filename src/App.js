import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import "./app.scss";
import Demo from "./app/views/Demo";
import { Theme } from "./styles/Theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Demo />
    </ThemeProvider>
  );
};

export default App;
