import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  margin-top: -8px;
  padding: 25px;
  margin-bottom: 90px;

  @media screen and (max-width: 800px) {
    margin-top: 0;
    width: 50px;
    padding: 0;
  }
`;

export const SearchBarContainer = styled.div``;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(NavLink)`
  padding: 15px 15px;
  font-size: 18px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;

  &:hover,
  &.active,
  &:active {
    padding-bottom: 3px;
    margin-bottom: 10px;

    border-bottom: darkgrey solid 1px;
  }

  @media screen and (max-width: 385px) {
    padding: 15px 6px;
    font-size: 17px;
  }

  @media screen and (max-width: 345px) {
    padding: 15px 6px;
    font-size: 16px;
  }
`;
