import React from "react";
import styled from "styled-components";
import { ReactComponent as HumidtyIcon } from "../../images/Humidty.svg";
import { ReactComponent as PressureIcon } from "../../images/Pressure.svg";
import { ReactComponent as VisibilityIcon } from "../../images/Visibility.svg";
import { ReactComponent as FeelsLikeIcon } from "../../images/FeelsLike.svg";

const StyledContainer = styled.div`
  width: 33.25rem;
  height: 6.875rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem 1rem;
  margin: 1rem auto 0 auto;
`;

const StyledOtherData = styled.div`
  width: 16.125rem;
  height: 5.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.backgroundthird};
  font-weight: ${(props) => props.theme.typography.weightRegular};
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
  font-size: 1.25rem;
`;

const OtherData = () => {
  return (
    <StyledContainer>
      <StyledOtherData>
        <StyledTitle>Humidity</StyledTitle>
        <StyledDiv>
          <HumidtyIcon />
          <StyledData>
            73<Styledpercent>%</Styledpercent>
          </StyledData>
        </StyledDiv>
      </StyledOtherData>
      <StyledOtherData>
        <StyledTitle>Pressure</StyledTitle>
        <StyledDiv>
          <PressureIcon />
          <StyledData>
            1019<Styledpercent>hpa</Styledpercent>
          </StyledData>
        </StyledDiv>
      </StyledOtherData>
      <StyledOtherData>
        <StyledTitle>Visibility</StyledTitle>
        <StyledDiv>
          <VisibilityIcon />
          <StyledData>
            2.5<Styledpercent>km</Styledpercent>
          </StyledData>
        </StyledDiv>
      </StyledOtherData>
      <StyledOtherData>
        <StyledTitle>Feels Like</StyledTitle>
        <StyledDiv>
          <FeelsLikeIcon />
          <StyledData>
            20<Styledpercent>°C</Styledpercent>
          </StyledData>
        </StyledDiv>
      </StyledOtherData>
    </StyledContainer>
  );
};

export default OtherData;
