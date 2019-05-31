import React from "react";
import { render } from "react-dom";
import { Home } from "./pages/home";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";

render(
  <>
    <BrowserRouter>
      <Home />
      <CssBaseline />
    </BrowserRouter>
  </>,
  document.querySelector("#root")
);
