import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 65%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 930px) {
    width: 85%;
  }

  @media screen and (max-width: 520px) {
    width: 95%;
  }
`;

export const TrashIconContainer = styled.div`
  margin-top: 20px;
  cursor: pointer;
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  font-size: 18px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const StartAddingMessage = styled.p`
  font-size: 28px;
  text-align: center;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 24%;

  &:nth-last-child(2) {
    width: 14%;
  }

  &:last-child {
    width: 14%;
    text-align: right;
  }

  .short-description {
    display: none;
  }

  .short-remove {
    display: none;
  }

  @media (max-width: 400px) {
    .short-description {
      display: inline-block;
    }
    .full-description {
      display: none;
    }

    .short-remove {
      display: inline-block;
    }
    .full-remove {
      display: none;
    }
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 30px;
  @media screen and (max-width: 520px) {
    font-size: 28px;
  }
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
