"use client"
import React, { useEffect, useState } from 'react';
import Img from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
function Api() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photosData = await data.json();
        setPhotos(photosData.slice(0, 3).map((photo) => photo.url));
    };
    obtenerDatos();
  }, []);
  return (
    <div className='carusel__container'>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style={{width:"600px",margin:"0 auto"}}>
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <Img src={photos[0]} className="d-block w-100" alt="..." width={600} height={500}/>
            </div>
            <div class="carousel-item">
            <Img src={photos[1]} className="d-block w-100" alt="..." width={600} height={500}/>
            </div>
            <div class="carousel-item">
            <Img src={photos[2]} className="d-block w-100" alt="..." width={600} height={500}/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  );
}

export default Api;
