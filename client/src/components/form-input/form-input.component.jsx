import React, { useState, useEffect } from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
  FormInputError
} from "./form-input.styles";

const FormInput = ({
  handleChange,
  label,
  value,
  error,
  touched,
  ...props
}) => {
  const [classes, setClasses] = useState("");

  useEffect(() => {
    if (value && error && touched) {
      setClasses("shrink error");
    } else if (value && !error) {
      setClasses("shrink");
    } else if (!value && error && touched) {
      setClasses("error");
    } else {
      setClasses("");
    }
  }, [value, error, classes, touched]);

  return (
    <GroupContainer>
      <FormInputContainer
        onChange={handleChange}
        {...props}
        className={classes}
      />
      {label ? (
        <>
          <FormInputLabel className={classes}>{label}</FormInputLabel>
          <FormInputError>{error && touched ? error : null}</FormInputError>
        </>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
