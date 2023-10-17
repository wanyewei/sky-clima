import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./props/Theme";
import DefaultLout from "./components/layout/DefaultLout";
import WeatherCard from "./components/homePage/WeatherCard";
import WeatherDetail from "./components/homePage/WeatherDetail";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #100e17;
`;
const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 996px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Homepage = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <DefaultLout>
          <StyledWrapper>
            <WeatherCard />

            <WeatherDetail />
          </StyledWrapper>
        </DefaultLout>
      </StyledDiv>
    </ThemeProvider>
  );
};

export default Homepage;
