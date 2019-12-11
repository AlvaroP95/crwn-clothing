import React, { useState, useEffect } from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from "./form-input.styles";

const FormInput = ({ handleChange, label, value, error, ...props }) => {
  // console.log("jeje", props.value, props.error, props.touched);
  const [classes, setClasses] = useState("");
  // const [error, setError] = useState("");
  console.log(classes);

  useEffect(() => {
    if (value && error) {
      setClasses("shrink error");
      console.log(classes);
    } else if (value && !error) {
      setClasses("shrink");
      console.log(classes);
    } else if (!value && error) {
      setClasses("error");
      console.log(classes);
    } else {
      setClasses("");
      console.log(classes);
    }
    // props.value ? setClasses("shrink") : setClasses("");
    // props.error ? setError(props.error) : setError("");
  }, [value, error, classes]);

  // let jeje = "";
  // props.value ? (jeje = "shrink") : (jeje = "");

  // props.error ? setClasses("shrink") : setClasses("");

  return (
    <GroupContainer>
      <FormInputContainer
        onChange={handleChange}
        {...props}
        className={classes}
      />
      {label ? (
        <FormInputLabel className={classes}>
          {/* <FormInputLabel className={props.value ? "shrink" : ""}> */}
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
