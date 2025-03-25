export const validatePassword = (password) => {
  const regex = /^S{6,12}&/

  return regex.test(password)
}

export const validatePasswordMessage = "La contraseña debe contener de 6 a 12 caracteres sin espacios."