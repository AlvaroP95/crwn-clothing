import React from "react";
import Backdrop from "./backdrop.styles.jsx";

const Backdrop = ({ hidden, clicked }) => {
  return !hidden ? <Backdrop onClick={clicked}></Backdrop> : null;
};

export default Backdrop;
