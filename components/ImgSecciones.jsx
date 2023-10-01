import React from 'react'
import Botones from './botones'
import fondo from "../public/assets/arean2.jpg"
import Img from "next/image"
function ImgSecciones() {
  return (
    <div className="imgSecciones__container">
        <Img src={fondo} alt="fondo" className='imgSeccionArena'/>
        <div className="imgSecciones">
            <h2 >Una nueva temporada te espera</h2>
            <p >Nuevas prendas para todos</p>
            <div className="botones__container">
                <Botones texto="Mujer"/>
                <Botones texto="Hombre"/>
                <Botones texto="Bebé"/>
                <Botones texto="Niños"/>
                <Botones texto="Sport"/>
                <Botones texto="H&M HOME"/>
            </div>
        </div>
    </div>
  )
}

export default ImgSecciones