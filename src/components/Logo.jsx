import React, { Component } from 'react'
import PropTypes from "prop-types"

export const logo = "https://i.ibb.co/9h0ZZfj/Escudo-Transparente.png"

export const Logo = ({text}) => {
  return (
    <div className='auth-form-logo-container'>
      <img
        src={logo}
        alt="Escudo de Fundación Kinal."
        style={{
          width: '40px',
          height: '40px'
        }}
      />
      <span>&nbsp;&nbsp;{text}</span>
    </div>
  )
}

Logo.propTypes = {
  text: PropTypes.string.isRequired
}