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
  hasAttemptedAuthError,
  ...props
}) => {
  const [classes, setClasses] = useState("");

  useEffect(() => {
    if (value && error && touched) {
      if (error.length >= 42) {
        setClasses("shrink error long");
      } else {
        setClasses("shrink error");
      }
    } else if (value && !error) {
      setClasses("shrink");
    } else if (!value && error && touched) {
      if (error.length < 42) {
        setClasses("error");
      } else {
        setClasses("error long");
      }
    } else if (error && hasAttemptedAuthError) {
      setClasses("error long");
      if (value) {
        setClasses("error long shrink");
      }
    } else {
      setClasses("");
    }
  }, [value, error, classes, touched, hasAttemptedAuthError]);
  return (
    <GroupContainer>
      <FormInputContainer
        onChange={handleChange}
        {...props}
        className={classes}
        value={value}
      />
      {label ? (
        <>
          <FormInputLabel className={classes}>{label}</FormInputLabel>
          <FormInputError className={classes}>
            {error && (touched || hasAttemptedAuthError) ? error : null}
          </FormInputError>
        </>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
