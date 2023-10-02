import React from 'react'
import CardItem from './CardItem'
import img1 from "../public/assets/ropa1.png"
import img2 from "../public/assets/ropa2.png"
import img3 from "../public/assets/ropa3.png"
import img4 from "../public/assets/ropa4.png"
import img5 from "../public/assets/ropa5.png"
import img6 from "../public/assets/ropa6.webp"
import img7 from "../public/assets/ropa7.webp"
function Carusel() {
  return (
    <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-touch="false" data-bs-interval="false" >
        <div class="carousel-inner" style={{width:"70vw",backgroundColor:"red",margin:"0 auto",height:"17vw"}}>
            <div class="carousel-item active" style={{display:"flex",justifyContent:"space-between"}}>
            <CardItem imagen={img1} texto="Hombre Catalogo"/>
            <CardItem imagen={img2} texto="Hombre Catalogo"/>
            <CardItem imagen={img3} texto="Hombre Catalogo"/>
            </div>
            <div class="carousel-item" style={{display:"flex",justifyContent:"space-between"}}>
            <CardItem imagen={img4} texto="Hombre Catalogo"/>
            <CardItem imagen={img5} texto="Hombre Catalogo"/>
            <CardItem imagen={img6} texto="Hombre Catalogo"/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}

export default Carusel