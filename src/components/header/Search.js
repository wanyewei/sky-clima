import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../images/search.svg";

const StyledDropDown = styled.div`
  display: none;
`;

const StyledSearch = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  height: 2rem;
  width: 20.813rem;
  justify-content: center;
  align-items: center;
  background-color: #202021;
  border-radius: 3.125rem;
  svg {
    display: block;
    position: relative;
    height: 1.5rem;
    width: 1.5rem;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    cursor: pointer;
  }

  &:hover {
    & > ${StyledDropDown} {
      display: block;
      position: fixed;
      width: 100%;
      max-width: 24%;
      border-radius: 3.125rem;
      color: ${(props) => props.theme.color.textMain};
      background-color: ${(props) => props.theme.color.backgroundColor};
      box-shadow: 0px 2px 3px 0px #7b7980;
      box-sizing: border-box;
      overflow: auto;
      z-index: 10;
    }
  }
`;

const StyledInput = styled.input`
  margin-left: 0.25rem;
  width: 17rem;
  border: none;
  color: ${(props) => props.theme.color.textMain};
  background-color: ${(props) => props.theme.color.backgroundSurface};
  &:focus {
    outline: none;
  }
`;

const StyledLi = styled.li`
  display: block;
  color: ${(props) => props.theme.color.textMain};
  padding: 0.75rem;
  font-size: 0.625rem;
  margin: 0.313rem 0.625rem;
  cursor: pointer;
  text-align: center;
  justify-content: centers;
  &:hover {
    background-color: aquamarine;
    border-radius: 3.125rem;
  }
`;

const Search = () => {
  return (
    <StyledSearch>
      <SearchIcon />
      <StyledInput
        type="text"
        name="search"
        placeholder="Search for country,city..."
        autoComplete="off"
        data-search-field
      />
      {/* <StyledDropDown>
        <StyledLi>125</StyledLi>
        <StyledLi>15</StyledLi>
        <StyledLi>66</StyledLi>
        <StyledLi>777</StyledLi>
      </StyledDropDown> */}
    </StyledSearch>
  );
};

export default Search;
