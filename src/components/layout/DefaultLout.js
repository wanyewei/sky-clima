import React from "react";
import { Header } from "./Header";
import styled from "styled-components";
import SideMenus from "./SideMenus";

const StyledWrapper = styled.div`
  color: ${(props) => props.theme.color.textMain};
  display: flex;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyled};
`;

const DefaultLout = ({ children }) => {
  return (
    <div>
      <Header />
      <StyledWrapper>
        <SideMenus />
        {children}
      </StyledWrapper>
    </div>
  );
};

export default DefaultLout;
