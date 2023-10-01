import React from 'react'
import "./styles.css"
function Botones(props) {
  return (
    <button className='boton'>
        {props.texto}
    </button>
  )
}

export default Botones