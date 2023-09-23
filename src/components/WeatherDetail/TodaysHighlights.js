import React from "react";
import styled from "styled-components";
import AirQuality from "../TodaysHighlights/AirQuality";
import SunRiseSet from "../TodaysHighlights/SunRiseSet";
import OtherData from "../TodaysHighlights/OtherData";

const StyledTodaysHighlights = styled.div`
  width: 35.25rem;
  height: 31.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.backgroundSurface};
`;

const StyledTitle = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  font-size: 0.75rem;
  font-weight: ${(props) => props.theme.typography.weightRegular};
`;

const TodaysHighlights = () => {
  return (
    <StyledTodaysHighlights>
      <StyledTitle>Todays Highlights</StyledTitle>
      <AirQuality />
      <SunRiseSet />
      <OtherData />
    </StyledTodaysHighlights>
  );
};

export default TodaysHighlights;
