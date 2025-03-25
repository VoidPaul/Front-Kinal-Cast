import React from "react";
import PropTypes from "prop-types"

export const Register = ({ switchAuthHandler }) => {
  return (
    <>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        ¿Ya tienes una cuenta?... ¡Inicia sesión acá!
      </span>
    </>
  )
}

Register.propTypes = {
  switchAuthHandler: PropTypes.func.isRequired,
}