import React from "react";

export const Register = ({switchAuthHandler}) => {
  return (
    <>
        <span onClick={switchAuthHandler} className="auth-form-switch-label">
        ¿Ya tienes una cuenta?... ¡Inicia sesión acá!
        </span>
    </>
  );
};
