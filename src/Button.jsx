import React from 'react'
import './Componets/style/Bottons.css'

const Button = ({handleNewquote}) => {
  return (
   <button className='container_button' onClick={handleNewquote} >Probar mi Suerte </button>
  )
}

export default Button