import React from "react";
import { Header } from "./Header";
import styled from "styled-components";
import SideMenus from "./SideMenus";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.color.textMain};
  display: flex;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyled};
`;

const DefaultLout = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <StyledWrapper>
        <SideMenus />
        {children}
      </StyledWrapper>
    </div>
  );
};

export default DefaultLout;
