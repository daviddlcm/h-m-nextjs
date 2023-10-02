import React from "react";
import "./styles.css"
import Img from "next/image"
import usuario from "../public/assets/delantero.png"
import bolsa from "../public/assets/bolso.png"
import corazon from "../public/assets/me-gusta.png"
import logo from "../public/assets/H&M-Logo.svg.png"
function Header() {
  return (
    <div className="header__container">
      <div className="fila">
        <div className="columna">
            <p className="texthead">Atencion al Cliente</p>
            <p className="texthead">Fashion News</p>
            <p className="texthead">Encontrar una tienda</p>
            <p className="texthead">°°°</p>
        </div>
        <div className="columna" style={{justifyContent:"center"}}>
          <Img src={logo} alt="logo" width={80} height={50} style={{marginTop:"20px"}}/>
        </div>
        <div className="columna" style={{justifyContent:"end"}}>
            <Img src={usuario} alt="usuario" width={35} height={35}/>
            <p className="texthead">Iniciar sesión</p>
            <Img src={corazon} alt="corazon" width={35} height={35}/>
            <p className="texthead">Favoritos</p>
            <Img src={bolsa} alt="bolsa" width={35} height={35}/>
            <p className="texthead">Shopping bag (0)</p>
        </div>
      </div>
    </div>
  );
}
export default Header;
