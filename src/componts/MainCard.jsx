import React from 'react'
import Lspine from '../assets/0071.png'
import Glaskugel from '../assets/GlasKugelSchach.png'
import Roadlogo from '../assets/roadlogo.jpg'
const MainCard = () => {
  return (
    <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Lspine} className="d-block w-100" alt="071"></img>
                </div>
                <div className="carousel-item">
                    <img src={Glaskugel} className="d-block w-100" alt="GlaskugelSchach"></img>
                </div>
                <div className="carousel-item">
                    <img src={Roadlogo} className="d-block w-100" alt="roadlogo"></img>
                </div>
            </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>
    </div>
  )
}

export default MainCard