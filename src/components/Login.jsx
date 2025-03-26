import React, { useState } from "react"
import PropTypes from "prop-types"
import { Input } from "./Input"
import {
  validateEmail,
  validatePassword,
  validateEmailMessage,
  validatePasswordMessage,
} from "../shared/validators"
import { Logo } from "./Logo"

export const Login = ({ switchAuthHandler }) => {
  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    passwordConf: {
      value: "",
      isValid: false,
      showError: false,
    },
    username: {
      value: "",
      isValid: false,
      showError: false,
    },
  })

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }))
  }

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false
    switch (field) {
      case "email":
        isValid = validateEmail(value)
        break
      case "password":
        isValid = validatePassword(value)
        break
      default:
        break
    }

    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }))
  }

  return (
    <div className="login-container">
      <Logo text={"Formulario de registro"} />
      <form className="auth-form">
        <Input
          field="email"
          label="Email"
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={validateEmailMessage}
        />
        <Input
          field="password"
          label="Password"
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type="password"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.password.showError}
          validationMessage={validatePasswordMessage}
        />
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        ¿Aún no tienes una cuenta? ¡Regístrate ahora!
      </span>
    </div>
  )
}
