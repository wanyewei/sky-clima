import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./props/Theme";
import DefaultLout from "./components/layout/DefaultLout";

const Homepage = () => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultLout>123456789888888888888888</DefaultLout>
    </ThemeProvider>
  );
};

export default Homepage;
