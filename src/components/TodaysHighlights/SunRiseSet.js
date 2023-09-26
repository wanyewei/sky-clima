import React from "react";
import styled from "styled-components";
import { ReactComponent as SunRiseIcon } from "../../images/Sunrise.svg";
import { ReactComponent as SunSet } from "../../images/Sunset.svg";

const StyledSunRiseSet = styled.div`
  width: 95%;
  height: 6.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin: 0 auto;
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
`;

const StyledIndex = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: ${(props) => props.theme.typography.weightRegular};

  svg {
    flex-basis: 1.75rem;
    width: 1.75rem;
    height: 1.75rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const StyledIndexWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyledIndexName = styled.div`
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.color.textSecondary};
  font-size: 0.625rem;
`;

const StyledIndexTime = styled.div`
  font-size: 1.75rem;
`;

const SunRiseSet = () => {
  return (
    <StyledSunRiseSet>
      <StyledTitle>Sunrise & Sunset</StyledTitle>
      <StyledDiv>
        <StyledIndex>
          <SunRiseIcon />
          <StyledIndexWrapper>
            <StyledIndexName>Sunrise</StyledIndexName>
            <StyledIndexTime>6:20 AM</StyledIndexTime>
          </StyledIndexWrapper>
        </StyledIndex>
        <StyledIndex>
          <SunSet />
          <StyledIndexWrapper>
            <StyledIndexName>SunSet</StyledIndexName>
            <StyledIndexTime>6:01 PM</StyledIndexTime>
          </StyledIndexWrapper>
        </StyledIndex>
      </StyledDiv>
    </StyledSunRiseSet>
  );
};

export default SunRiseSet;
