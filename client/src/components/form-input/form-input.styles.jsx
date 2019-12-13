import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";
const errorColor = "red";

const shrinkLabelStyles = css`
  top: -17px;
  font-size: 14px;
  color: ${mainColor};
  left: 1px;
`;

const errorLabelStyles = css`
  color: ${errorColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 40px 0 50px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  margin: 25px 0;
  border-bottom: 1px solid ${subColor};

  &.error {
    border-bottom: 1px solid ${errorColor};
    background: rgba(255, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }

  &.error:focus ~ label {
    ${errorLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }

  &.error {
    ${errorLabelStyles}
  }

  &.error.shrink {
    ${shrinkLabelStyles}
    ${errorLabelStyles}
  }
`;

export const FormInputError = styled.div`
  font-size: 16px;
  color: ${errorColor};
  bottom: -23px;
  left: 1px;
  position: absolute;

  &.error.long {
    bottom: -45px;
    line-height: 1;
    bottom: -33px;
  }
`;
