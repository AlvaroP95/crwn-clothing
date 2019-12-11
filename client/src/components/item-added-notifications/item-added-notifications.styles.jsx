import styled from "styled-components";

export const ItemAddedNotificationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  pointer-events: none;
  /* Styles for fix at bottom */
  position: fixed;
  bottom: 0%;

  @media screen and (max-width: 450px) {
    padding-right: 20px;
  }
`;

export const ItemAddedNotificationSubContainer = styled.div`
  display: flex;
  justify-content: center;
  pointer-events: auto;
`;
