import React from "react";
import { Header } from "./Header";
import styled from "styled-components";
import SideMenus from "./SideMenus";

const StyledWrapper = styled.div`
  display: flex;
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
