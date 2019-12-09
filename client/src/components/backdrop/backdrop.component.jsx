import React from "react";
import { StyledBackdrop } from "./backdrop.styles.jsx";

const Backdrop = ({ hidden, clicked }) => {
  return hidden ? <StyledBackdrop onClick={clicked}></StyledBackdrop> : null;
};

export default Backdrop;
