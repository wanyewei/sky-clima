import React from "react";
import styled from "styled-components";
import TodayCard from "../wheatherCard/TodayCard";
import FutureCard from "../wheatherCard/FutureCard";

const StyledWrapper = styled.div`
  flex: 0.5;
  display: inline-flex;
  padding: 0.94rem 0rem 3.3rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-left: 6.5rem;
  @media (max-width: 996px) {
    width: 95%;
    flex: 0 0 100%;
    justify-content: center;
    align-items: center;
    margin: 0.31rem 0.5rem 0.75rem 0.5rem;
    padding: 0;
  }
`;

const WeatherCard = () => {
  return (
    <StyledWrapper>
      <TodayCard />
      <FutureCard />
    </StyledWrapper>
  );
};

export default WeatherCard;
