import React from 'react'

export const Login = ({switchAuthHandler}) => {
  return (
    <>
        <span onClick={switchAuthHandler} className='auth-form-switch-label'>
            ¿Aún no tienes una cuenta? ¡Regístrate ahora!
        </span>
    </>
    
  )
}
