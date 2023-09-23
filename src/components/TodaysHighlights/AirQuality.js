import React from "react";
import styled from "styled-components";
import { ReactComponent as WindIcon } from "../../images/wind.svg";

const StyledAirQuality = styled.div`
  width: 33.25rem;
  height: 6.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin: 0 auto 1rem auto;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.backgroundthird};
`;

const StyledTitle = styled.div`
  height: 0.75rem;
  margin-top: 1rem;
  margin-bottom: 1.12rem;
  margin-left: 1rem;
  color: ${(props) => props.theme.color.textSecondary};
  font-size: 0.75rem;
  font-weight: ${(props) => props.theme.typography.weightRegular};
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  padding-right: 3rem;
  svg {
    flex-basis: 2rem;
    width: 2rem;
    height: 1.75rem;
    margin-top: 0.3rem;
    margin-left: 1rem;
    margin-right: 1.94rem;
  }
`;

const StyledIndex = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: ${(props) => props.theme.typography.weightRegular};
`;

const StyledO3Index = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -2rem;
  width: 3.5rem;
  height: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  color: #000;
  background-color: #e589b7;
  font-size: 0.625rem;
  font-weight: ${(props) => props.theme.typography.weightRegular};
`;

const StyledIndexName = styled.div`
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.color.textSecondary};
  font-size: 0.75rem;
`;
const StyledIndexData = styled.div`
  font-size: 1.75rem;
`;

const AirQuality = () => {
  return (
    <StyledAirQuality>
      <StyledTitle>Air Quality Index</StyledTitle>
      <StyledDiv>
        <WindIcon />
        <StyledIndex>
          <StyledIndexName>PM2.5</StyledIndexName>
          <StyledIndexData>270</StyledIndexData>
        </StyledIndex>
        <StyledIndex>
          <StyledIndexName>SO2</StyledIndexName>
          <StyledIndexData>4.53</StyledIndexData>
        </StyledIndex>
        <StyledIndex>
          <StyledIndexName>NO2</StyledIndexName>
          <StyledIndexData>41.5</StyledIndexData>
        </StyledIndex>
        <StyledIndex>
          <StyledO3Index>Very Poor</StyledO3Index>
          <StyledIndexName>O3</StyledIndexName>
          <StyledIndexData>23.6</StyledIndexData>
        </StyledIndex>
      </StyledDiv>
    </StyledAirQuality>
  );
};

export default AirQuality;
