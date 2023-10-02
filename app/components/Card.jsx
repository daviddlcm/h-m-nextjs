import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "next/image"
import "./styles.css"
function Card(props) {
  return (
        <div className="card" style={{width:"18rem",height:"25vw",textAlign:"center",borderRadius:"6px"}}>
          <Img src={props.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">INSIDE H&M</h5>
            <p className="card-text" style={{fontSize:"14px",width:"11vw",height:"4vw",margin:"0 auto"}}>{props.subtitulo}</p>
            <p className='read'>Read The Story</p>
          </div>
        </div>
  )
}

export default Card