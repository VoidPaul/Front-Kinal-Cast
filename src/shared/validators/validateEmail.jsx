export const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/

  return regex.test(email)
}

export const validateEmailMessage = "El email no es válido"