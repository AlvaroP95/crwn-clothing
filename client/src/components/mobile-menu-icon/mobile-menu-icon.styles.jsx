import styled from "styled-components";
import { ReactComponent as MobileMenuIconSVG } from "../../assets/mobile-menu.svg";

export const MobileMenuIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  top: -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 375px) {
    width: 39px;
  }
`;

export const MobileMenuIcon = styled(MobileMenuIconSVG)`
  width: 22px;
  height: 22px;
  z-index: 5;

  &:hover {
    width: 24px;
    height: 24px;
  }
`;

export const MobileMenuIconActive = styled(MobileMenuIcon)`
  width: 24px;
  height: 24px;
`;
