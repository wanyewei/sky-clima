import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../images/search.svg";
import WheatherDataContext from "../../helpers/WheatherData";

const StyledDropDown = styled.div`
  display: none;
`;

const StyledSearch = styled.form`
  display: flex;
  position: relative;
  margin: auto;
  height: 2rem;
  width: 20%;
  justify-content: flex-start;
  align-items: center;
  background-color: #202021;
  border-radius: 3.125rem;

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
  @media (max-width: 996px) {
    position: absolute;
    top: 1.5rem;
    right: 2.56rem;
    width: auto;
    margin: 0;
  }
`;

const StyledButton = styled.button`
  margin-left: 0.75rem;
  border-radius: 3.125rem;
  border: none;
  background-color: ${(props) => props.theme.color.backgroundSurface};
  cursor: pointer;
  svg {
    color: #fff;
    display: block;
    position: relative;
    height: 50%;
    margin-right: 2%;
  }

  @media (max-width: 996px) {
    margin-left: 0;
    padding: 0.5rem;
    border-radius: 50%;
  }
`;

const StyledInput = styled.input`
  width: 80%;
  border: none;
  border-radius: 3.125rem;
  color: ${(props) => props.theme.color.textMain};
  background-color: ${(props) => props.theme.color.backgroundSurface};
  &:focus {
    outline: none;
  }
  @media (max-width: 996px) {
    display: none;
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
  const {
    // handleInputCHange,
    // searchInputValue,
    handleSubmit,
    searchRef,
    handleClick,
  } = useContext(WheatherDataContext);

  return (
    <StyledSearch onSubmit={handleSubmit}>
      <StyledButton
        // type="submit"
        onClick={handleClick}
      >
        <SearchIcon />
      </StyledButton>
      <StyledInput
        type="text"
        name="search"
        id="search"
        placeholder="Search for country,city..."
        ref={searchRef}
        // onChange={handleInputCHange}
        // value={searchInputValue}
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
