import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 940px) {
    width: 100%;
    align-items: center;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  justify-content: space-between;

  @media screen and (min-width: 941px) {
    display: flex;
  }

  @media screen and (max-width: 940px) {
    margin: auto;
  }
`;
