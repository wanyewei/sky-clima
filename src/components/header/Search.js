import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../images/search.svg";
import WeatherDataContext from "../../helpers/WeatherData";

const StyledDropDown = styled.div`
  width: 100%;
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
      display: flex;
      flex-direction: column;
      position: absolute;
      justify-content: center;
      align-items: center;
      top: 100%;
      left: 0;
      width: 100%;
      border-radius: 1.5rem;
      color: ${(props) => props.theme.color.textMain};
      background-color: ${(props) => props.theme.color.backgroundColor};
      box-shadow: 0px 2px 3px 0px #7b7980;
      box-sizing: border-box;
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
    display: ${(props) => (props.isInputOpen ? "block" : "none")};
  }
`;

const StyledLi = styled.li`
  display: ${(props) => (props.isInputOpen ? "flex" : "none")};
  width: 90%;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.color.textMain};
  padding: 0.75rem;
  font-size: 0.8rem;
  margin: 0.4rem 0.625rem;
  cursor: pointer;
  justify-content: centers;
  &:hover {
    background-color: #202021;
    border-radius: 1.5rem;
  }
`;

const Search = () => {
  const {
    handleSubmit,
    searchRef,
    handleClick,
    serchHistory,
    handleHistoryClick,
    isInputOpen,
    handleInputFocus,
  } = useContext(WeatherDataContext);

  return (
    <StyledSearch onSubmit={handleSubmit}>
      <StyledButton onClick={handleClick}>
        <SearchIcon />
      </StyledButton>
      <StyledInput
        type="text"
        name="search"
        id="ketword"
        placeholder="Search for city in Taiwan ..."
        ref={searchRef}
        autoComplete="on"
        onFocus={handleInputFocus}
        isInputOpen={isInputOpen}
      />
      <StyledDropDown>
        {serchHistory.length > 0 ? (
          serchHistory.map((item, index) => {
            return (
              <StyledLi
                isInputOpen={isInputOpen}
                key={index}
                onClick={() => {
                  handleHistoryClick(item);
                }}
              >
                {item}
              </StyledLi>
            );
          })
        ) : (
          <StyledLi isInputOpen={isInputOpen}>
            No search history available
          </StyledLi>
        )}
      </StyledDropDown>
    </StyledSearch>
  );
};

export default Search;
