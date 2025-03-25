export const validatePasswordConfirm = (password, confirmPass) => {
  return password === confirmPass
}

export const validatePasswordConfirmMessage = "Las contraseñas no coinciden."