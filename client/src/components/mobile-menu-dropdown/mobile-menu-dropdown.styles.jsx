import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const OptionMobileLink = styled(NavLink)`
  font-size: 20px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  margin: 5px 0;

  &:hover,
  &.active,
  &:active {
    border: darkgrey solid 1px;
  }
`;
