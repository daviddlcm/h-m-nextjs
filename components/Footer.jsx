import React from 'react'
import "./styles.css"
import Img from "next/image"
import face from "../public/assets/facebook.png"
import insta from "../public/assets/instagram.png"
import youtube from "../public/assets/youtube.png"
import twitter from "../public/assets/gorjeo.png"
import pinter from "../public/assets/logotipo-de-pinterest.png"
import logo from "../public/assets/logoh&m.webp"
function Footer() {
  return (
    <div className="footer__container">
        <footer>
            <div className="filaFooter">
                <div className="columnaFooter">
                    <strong>
                        <p>COLECCIONES</p>
                    </strong>
                    <p>Mujer</p>
                    <p>Divided</p>
                    <p>Hombre</p>
                    <p>Bebé</p>
                    <p>Niños</p>
                    <p>H&M HOME</p>
                    <p>Beauty</p>
                    <p>Sport</p>
                </div>
                <div className="columnaFooter">
                    <strong>
                        <p>INFORMACIÓN CORPORATIVA</p>
                    </strong>
                    <p>Trabajar en H&M</p>
                    <p>Acerca del grupo H&M</p>
                    <p>Sostenibilidad en el Grupo H&M</p>
                    <p>Prensa</p>
                    <p>Relación con inversionistas</p>
                    <p>Política empresarial</p>
                </div>
                <div className="columnaFooter">
                    <strong>
                        <p>AYUDA</p>
                    </strong>
                    <p>Atención al Cliente</p>
                    <p>Mi cuenta</p>
                    <p>Nuestras tiendas</p>
                    <p>Términos y Condiciones</p>
                    <p>Contacto</p>
                    <p>Tarjetas de regalo</p>
                    <p>Denunciar una estafa</p>
                    <p>Aviso de cookies</p>
                    <p>Cookie Settings</p>
                </div>
                <div className="columnaFooter">
                    <strong>
                        <p>CONVIÉRTETE EN MIEMBRO</p>
                    </strong>
                    <p>¡Unete ahora y recibe un 10% de descuento en tu próxima compra!</p>
                    <p>CONOCE MAS</p>
                </div>
                
            </div>
                <div className='redes'>
                    <Img src={face} alt="facebook" width={25} height={25}/>
                    <Img src={twitter} alt="twitter" width={25} height={25}/>
                    <Img src={insta} alt="instagram" width={25} height={25}/>
                    <Img src={youtube} alt="youtube" width={25} height={25}/>
                    <Img src={pinter} alt="pinterest" width={25} height={25}/>
                </div>
            <div className='textoAbajo'>
                <p>El contenido de este sitio está protegido por copyRight y es propiedad de H&M Hennes & Mauritz AB.</p>
            </div>
            <div className='logo'>
                <Img src={logo} alt="H&M" width={70} height={70}/>
            </div>
            <div className="textoAbajo">
                <p>Mexico | $</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer