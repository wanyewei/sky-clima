import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./props/Theme";
import DefaultLout from "./components/layout/DefaultLout";
import WeatherCard from "./components/homePage/WeatherCard";
import WeatherDetail from "./components/homePage/WeatherDetail";

const StyledDiv = styled.div`
  background-color: #100e17;
`;

const Homepage = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <DefaultLout>
          <WeatherCard />
          <WeatherDetail />
        </DefaultLout>
      </StyledDiv>
    </ThemeProvider>
  );
};

export default Homepage;
