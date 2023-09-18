import React from "react";
import styled from "styled-components";
import { ReactComponent as LocationIcon } from "../../images/location.svg";

const StyledWrapp = styled.div`
  display: flex;
  position: relative;
  right: 1rem;
  top: 1rem;
  width: 8rem;
  height: 2rem;
  border-radius: 3.125rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background-color: ${(props) => props.theme.color.primary};
  svg {
    display: block;
    position: relative;
    margin-left: 0.325rem;
    margin-right: 0.325rem;
    color: ${(props) => props.theme.color.textSecondary};
  }
  p {
    padding-top: 0.1rem;
    font-size: 0.625rem;
    margin-right: 0.325rem;
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-weight: ${(props) => props.theme.typography.weightTitle};
  }
`;

const CurrentLocation = () => {
  return (
    <StyledWrapp>
      <LocationIcon />
      <p>Current Location</p>
    </StyledWrapp>
  );
};

export default CurrentLocation;
