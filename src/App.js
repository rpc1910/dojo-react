import React from "react";
import { ToastContainer } from "react-toastify";

import "axios-progress-bar/dist/nprogress.css";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles";

import Main from "./pages/Main";

export default function App() {
  return (
    <>
      <Main />
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}
