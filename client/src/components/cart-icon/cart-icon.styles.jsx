import styled from "styled-components";

import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  top: -14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 375px) {
    width: 38px;
  }
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 28px;
  height: 28px;
  z-index: 5;

  &:hover {
    width: 30px;
    height: 30px;
  }
`;

export const ShoppingIconActive = styled(ShoppingIcon)`
  width: 30px;
  height: 30px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 10px;
  z-index: 0;
`;
