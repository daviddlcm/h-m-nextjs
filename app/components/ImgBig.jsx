import React from 'react'
import Img from "next/image"
import Botones from './Botones'
function ImgBig(props) {
  return (
    <div className="imgBig__container">
        <Img src={props.imagen} alt="imagen" className="img_Big"/>
        <div className="imgBig">
            <h1>{props.titulo}</h1>
            <p>{props.subtitulo}</p>
            <div className="botones__container">
                {props.id?(
                <>
                    <Botones texto={props.textoBoton}/>
                    <Botones texto={props.textoBoton2}/>
                </>
                ):
                (<Botones texto={props.textoBoton}/>)}
            </div>
            
        </div>
    </div>
  )
}

export default ImgBig