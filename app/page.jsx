import React from 'react'
import TextosNav from '@/app/components/TextosNav'
import ImgSecciones from '@/app/components/ImgSecciones'
import ImgBig from '@/app/components/ImgBig'
import Img1 from "../public/assets/img3.jpg"
import Img2 from "../public/assets/modelo4.jpg"
import Img3 from "../public/assets/modelo5.jpg"
import Img4 from "../public/assets/modelo6.png"
import ContenedorCards from '@/app/components/ContenedorCards'
import Api from '@/app/components/Api'
import Carusel from '@/app/components/Carusel'
function PageMain() {
  return (
    <div>
        <TextosNav/>
        <ImgSecciones/>
        <ImgBig titulo="Corte clásico: pierna recta" subtitulo="Una renovación de la mezquilla esencial atemporal." textoBoton="Comprar ahora" textoBoton2="Inspirate" id="1" imagen={Img1}/>
        {/*<Carusel/> */}
        <ImgBig titulo="Este Halloween, voy a ser..." subtitulo="Disfraces espeluznantes" textoBoton="Comprar ahora" imagen={Img2}/>
        <ImgBig titulo="Elegante y atractivo" subtitulo="Una mesa minimalista con un presupuesto minimalista." textoBoton="Comprar ahora" imagen={Img4}/>
        <ImgBig titulo="Próximamente:Eva Chen x H&M" subtitulo="En hm.com y en tiendas seleccionadas el 7 de septiembre" textoBoton="Aprender más" imagen={Img3}/>
        <ContenedorCards/>
        <Api/>
    </div>
  )
}

export default PageMain