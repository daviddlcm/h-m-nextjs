import React from 'react'
import "./styles.css"
function Navbar() {
  return (
    <div className='navbar__container'>
      <div className="nav">
        <p className='textNav'>Mujer</p>
        <p className='textNav'>Hombre</p>
        <p className='textNav'>Divided</p>
        <p className='textNav'>Bebé</p>
        <p className='textNav'>Niños</p>
        <p className='textNav'>H&M HOME</p>
        <p className='textNav'>Beauty</p>
        <p className='textNav'>Sport</p>
        <p className='textNav'>Rebajas</p>
        <p className='textNav'>Sustentabilidad</p>
        <div className="busqueda">
          <input className='inputBus' type="text"  placeholder='Buscar productos'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar