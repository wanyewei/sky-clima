import React from "react";
import styled from "styled-components";
import TodayCard from "../wheatherCard/TodayCard";
import FutureCard from "../wheatherCard/FutureCard";

const StyledWrapper = styled.div`
  display: inline-flex;
  padding: 0.934rem 0rem 3.3rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
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
