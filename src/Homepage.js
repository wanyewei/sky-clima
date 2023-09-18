import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./props/Theme";
import { Header } from "./components/layout/Header";

const Homepage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default Homepage;
