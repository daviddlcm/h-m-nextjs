import React from 'react'
import CardItem from './CardItem'
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