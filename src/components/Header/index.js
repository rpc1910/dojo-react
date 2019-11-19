import React from "react";

import { HeaderContainer } from "./styles";

import logo from "../../logo.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Tasks" />
      <h1>Tasks</h1>
    </HeaderContainer>
  );
}
