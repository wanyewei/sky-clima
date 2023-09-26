import React from "react";
import styled from "styled-components";
import TodaysHighlights from "../WeatherDetail/TodaysHighlights";
import TodayAt from "../WeatherDetail/TodayAt";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.75rem 1rem 0 1.5rem;
  @media (max-width: 995px) {
    width: 95%;
    margin: 0 0.5rem 0 0.5rem;
    align-items: center;
  }
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
