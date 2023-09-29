import React from "react";
import "./styles.css"
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
          <p>imagen</p>
        </div>
        <div className="columna" style={{justifyContent:"end"}}>
            <p className="texthead">Iniciar sesión</p>
            <p className="texthead">Favoritos</p>
            <p className="texthead">Shopping bag (0)</p>
        </div>
      </div>
    </div>
  );
}
export default Header;
