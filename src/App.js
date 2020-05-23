import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./helper/theme";
import "./App.css";
import { useDarkMode } from "./hooks/useDarkMode";
import Homepage from "./components/Homepage/Homepage";
import { GlobalStyles } from "./helper/global";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </>
  );
}

export default App;
