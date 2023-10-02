import React from 'react'
import Card from './Card'
import "./styles.css"
import Modelo1 from "../public/assets/modelo1.jpg"
import Modelo2 from "../public/assets/modelo2.jpg"
import Modelo3 from "../public/assets/modelo3.jpg"
function contenedorCards() {
  return (
      <div className="completo__container">
      <div className="encabezado" style={{paddingTop:"35px"}}>
        <h1>MAGAZINE</h1>
        <p>A WORLD OF INSPIRATION</p>
        <a href="" style={{color:"black"}}>READ H&M MAGAZINE</a>
      </div>
        <div className="completo">
            <Card subtitulo="Disney100 x H&M" img={Modelo1}/>
            <Card subtitulo="Dos miembros de H&M en Coachella." img={Modelo2}/>
            <Card subtitulo="DESPRENDE ALEGRIA ESTE VERANO CON LAKWENA X H&M" img={Modelo3}/>
        </div>
    </div>
  )
}

export default contenedorCards