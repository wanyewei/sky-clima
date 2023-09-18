import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../images/logol.svg";
import Search from "../header/Search";
import CurrentLocation from "../header/CurrentLocation";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  height: 3.7rem;
  z-index: 1;
  background-color: ${(props) => props.theme.color.backgroundColor};
`;

const StyledLogol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  color: ${(props) => props.theme.color.textMain};
  font-size: ${(props) => props.theme.typography.heading};
  font-weight: ${(props) => props.theme.typography.weightTitle};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyled};
  svg {
    height: 1.75rem;
    width: 1.75rem;
    margin-right: 0.5rem;
    margin-left: 1rem;
  }

  @media (max-width: 995px) {
  }
`;

export const Header = ({ fixHeader }) => {
  return (
    <StyledHeader fixed={fixHeader}>
      <StyledLogol>
        <LogoIcon />
        <p>SkyClima</p>
      </StyledLogol>
      <Search />
      <CurrentLocation />
    </StyledHeader>
  );
};
