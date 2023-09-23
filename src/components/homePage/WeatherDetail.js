import React from "react";
import styled from "styled-components";
import TodaysHighlights from "../WeatherDetail/TodaysHighlights";
import TodayAt from "../WeatherDetail/TodayAt";

const StyledWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.75rem 1rem 0 1.5rem;
`;
const WeatherDetail = () => {
  return (
    <StyledWrapper>
      <TodaysHighlights />
      <TodayAt />
    </StyledWrapper>
  );
};

export default WeatherDetail;
