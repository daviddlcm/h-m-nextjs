import React from 'react'
import Img from "next/image"
function CardItem(props) {
  return (
    <div className='cardItem__contaner'>
        <Img src={props.imagen} alt="imagen" width={200} height={200}/>
        <p>{props.texto}</p>
    </div>
  )
}

export default CardItem