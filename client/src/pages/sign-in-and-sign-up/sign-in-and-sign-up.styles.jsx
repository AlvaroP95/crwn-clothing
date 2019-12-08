import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 940px) {
    width: 100%;
    display: block;
  }
`;

export const HorizontalRule = styled.hr`
  width: 70%;
  margin-top: 29px;
  margin-bottom: 20px;
  display: none;

  @media screen and (max-width: 940px) {
    display: block;
  }

  @media screen and (max-width: 550px) {
    width: 80%;
  }

  @media screen and (max-width: 440px) {
    width: 90%;
  }
`;
