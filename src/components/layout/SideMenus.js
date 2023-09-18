import React from "react";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../../images/Home.svg";

const StyledWrapper = styled.div`
  position: sticky;
  display: inline-flex;
  justify-content: center;
  height: 100vh;
  width: 4.5rem;
  padding-top: 1.5rem;
  background-color: ${(props) => props.theme.color.backgroundSurface};
  svg {
    position: fixed;
    width: 2.25rem;
    height: 2.25rem;
  }

  @media (max-width: 996px) {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 4rem;
    padding-top: 1.5rem;
    svg {
      position: fixed;
      width: 1.458rem;
      height: 1.458rem;
    }
  }
`;

const SideMenus = () => {
  return (
    <StyledWrapper>
      <HomeIcon />
    </StyledWrapper>
  );
};

export default SideMenus;
