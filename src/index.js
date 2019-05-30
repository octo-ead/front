import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";

render(
  <>
    <BrowserRouter>
      <App />
      <CssBaseline />
    </BrowserRouter>
  </>,
  document.querySelector("#root")
);
