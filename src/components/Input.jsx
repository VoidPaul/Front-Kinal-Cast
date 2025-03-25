import React from "react";
import PropTypes from "prop-types";

export const Input = ({
  field,
  label,
  value,
  onChangeHandler,
  type,
  showErrorMessage,
  validationMessage,
  onBlurHandler,
  textArea,
}) => {
  return (
    <div>Input</div>
  )
}

Input.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  showErrorMessage: PropTypes.bool.isRequired,
  validationMessage: PropTypes.string.isRequired,
  onBlurHandler: PropTypes.func.isRequired,
  textArea: PropTypes.bool,
}

Input.defaultProps = {
  textArea: false,
}
