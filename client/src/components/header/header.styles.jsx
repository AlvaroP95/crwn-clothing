import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1400px) {
    width: 100%;
    margin: 10px auto 25px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  margin-top: -8px;
  padding: 11px 25px 25px 0;

  margin-bottom: 90px;

  @media screen and (max-width: 800px) {
    width: 50px;
    margin: 0 10px 0;
    padding: 0;
  }

  @media screen and (max-width: 375px) {
    width: 50px;
    margin: 0 10px 0 3px;
    padding: 0;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 63%;
  margin: 0px 15px 0px 4px;
  border: 1px solid darkgrey;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 375px) {
    margin: 0;
  }
`;

export const SearchInput = styled.input`
  background: none;
  background-color: white;
  font-size: 18px;
  padding: 19px 10px 17px 5px;
  border-radius: 0;
  height: 100%;
  border: none;
  color: darkslategrey;
  width: 100%;

  display: flex-start;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "Open Sans Condensed";
    font-size: 16px;
    font-weight: normal;
  }
`;

export const SearchInputContainer = styled.div`
  width: 100%;
`;

export const OptionsContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: auto;
  }
`;

export const OptionLink = styled(NavLink)`
  padding: 0px 15px 28px;
  font-size: 20px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;

  &:hover,
  &.active,
  &:active {
    padding-bottom: 6px;
    padding-top: 0px;
    margin-top: -16px;
    border-bottom: darkgrey solid 1px;
  }

  @media screen and (max-width: 800px) and (min-width: 650px) {
    &:hover,
    &.active,
    &:active {
      padding-bottom: 4px;
      margin-top: -16px;
    }
  }
`;
