import styled from "styled-components";

import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 25px;
  height: 25px;
  z-index: 5;

  &:hover {
    width: 28px;
    height: 28px;
  }
`;

export const ShoppingIconActive = styled(ShoppingIcon)`
  width: 28px;
  height: 28px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 10px;
  z-index: 0;
`;
