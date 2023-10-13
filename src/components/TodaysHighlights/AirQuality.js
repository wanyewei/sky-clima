import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as WindIcon } from "../../images/wind.svg";
import WheatherDataContext from "../../helpers/WheatherData";

const StyledAirQuality = styled.div`
  width: 95%;
  height: 100%;
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
  display: flex;
  justify-content: space-between;
  height: 0.75rem;
  margin-top: 1rem;
  margin-bottom: 1.12rem;
  margin-left: 1rem;
  color: ${(props) => props.theme.color.textSecondary};
  font-size: 0.75rem;
  font-weight: ${(props) => props.theme.typography.weightRegular};
  @media (max-width: 996px) {
    justify-content: flex-start;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  padding-right: 3rem;
  svg {
    flex-basis: 0.2;
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
  width: 3.5rem;
  height: 1rem;
  margin-right: 13%;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  color: #000;
  background-color: #e589b7;
  font-size: 0.625rem;
  font-weight: ${(props) => props.theme.typography.weightRegular};
  @media (max-width: 996px) {
    margin-left: 0.62rem;
    margin-right: 0;
  }
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
  const { pollution } = useContext(WheatherDataContext);
  return (
    <StyledAirQuality>
      <StyledTitle>
        <span>Air Quality Index</span>
        <StyledO3Index>{pollution.AirQuality}</StyledO3Index>
      </StyledTitle>

      <StyledDiv>
        <WindIcon />
        <StyledIndex>
          <StyledIndexName>PM2.5</StyledIndexName>
          <StyledIndexData>{pollution.PM2_5}</StyledIndexData>
        </StyledIndex>
        <StyledIndex>
          <StyledIndexName>SO2</StyledIndexName>
          <StyledIndexData>{pollution.SO2}</StyledIndexData>
        </StyledIndex>
        <StyledIndex>
          <StyledIndexName>NO2</StyledIndexName>
          <StyledIndexData>{pollution.NO2}</StyledIndexData>
        </StyledIndex>
        <StyledIndex>
          <StyledIndexName>O3</StyledIndexName>
          <StyledIndexData>{pollution.O3}</StyledIndexData>
        </StyledIndex>
      </StyledDiv>
    </StyledAirQuality>
  );
};

export default AirQuality;
