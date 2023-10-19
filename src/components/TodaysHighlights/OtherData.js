import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as HumidtyIcon } from "../../images/Humidty.svg";
import { ReactComponent as PressureIcon } from "../../images/Pressure.svg";
import { ReactComponent as VisibilityIcon } from "../../images/Visibility.svg";
import { ReactComponent as FeelsLikeIcon } from "../../images/FeelsLike.svg";
import WheatherDataContext from "../../helpers/WheatherData";

const StyledContainer = styled.div`
  flex: 0 0 100%;
  flex-grow: 1;
  width: 95%;
  height: 6.875rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem 1rem;
  margin: 1rem auto 1rem auto;
  @media (max-width: 996px) {
    width: 100%;
    flex: 0 0 100%;
    flex-wrap: nowrap;
  }
`;

const StyledDataWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem 1rem;
`;

const StyledOtherData = styled.div`
  flex: 0 0 100%;
  /* width: 16.125rem; */
  /* height: 5.5rem; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.backgroundthird};
  font-weight: ${(props) => props.theme.typography.weightRegular};

  @media (max-width: 996px) {
    flex: 0 0 90%;
  }
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-right: 1.2rem;

  svg {
    width: 1.75rem;
    height: 1.75rem;
    margin-left: 0.82rem;
  }
`;

const StyledData = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 1.75rem;
`;

const Styledpercent = styled.div`
  display: flex;
  font-size: 1.4rem;
  align-items: flex-end;
`;

const OtherData = () => {
  const { currentWheather } = useContext(WheatherDataContext);
  return (
    <StyledContainer>
      <StyledDataWrapper>
        <StyledOtherData>
          <StyledTitle>Humidity</StyledTitle>
          <StyledDiv>
            <HumidtyIcon />
            <StyledData>
              {currentWheather.humind}
              <Styledpercent>%</Styledpercent>
            </StyledData>
          </StyledDiv>
        </StyledOtherData>
        <StyledOtherData>
          <StyledTitle>Pressure</StyledTitle>
          <StyledDiv>
            <PressureIcon />
            <StyledData>
              {currentWheather.pressure}
              <Styledpercent>hpa</Styledpercent>
            </StyledData>
          </StyledDiv>
        </StyledOtherData>
      </StyledDataWrapper>
      <StyledDataWrapper>
        <StyledOtherData>
          <StyledTitle>Visibility</StyledTitle>
          <StyledDiv>
            <VisibilityIcon />
            <StyledData>
              {currentWheather.visibility}
              <Styledpercent>km</Styledpercent>
            </StyledData>
          </StyledDiv>
        </StyledOtherData>
        <StyledOtherData>
          <StyledTitle>Feels Like</StyledTitle>
          <StyledDiv>
            <FeelsLikeIcon />
            <StyledData>
              {Math.round(currentWheather.feels_like)}
              <Styledpercent>°C</Styledpercent>
            </StyledData>
          </StyledDiv>
        </StyledOtherData>
      </StyledDataWrapper>
    </StyledContainer>
  );
};

export default OtherData;
