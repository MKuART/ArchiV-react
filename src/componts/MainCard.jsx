import React from 'react'
import Lspine from '../assets/0071.png'
import Glaskugel from '../assets/GlasKugelSchach.png'
import Roadlogo from '../assets/roadlogo.jpg'
import './Maincard.css'

const MainCard = () => {
  return (
    <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner firstCard">
                <div className="carousel-item active ">
                    <img src={Lspine} className="d-block w-100" alt="071"></img>
                    
                </div>
                <div className="carousel-item">
                    <img src={Glaskugel} className="d-block w-100" alt="GlaskugelSchach"></img>
                    
                </div>
                <div className="carousel-item">
                    <img src={Roadlogo} className="d-block w-100" alt="roadlogo"></img>
                </div>
                <div className='firstCardSelectOne contentCard'>
                    <h3 className='firstNewsCardHeader'>Brand News</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corporis vero sapiente totam eum eveniet sequi quam nemo asperiores culpa libero, eligendi ratione tempora, non fugiat nobis, voluptate aperiam aut.</p>
                </div>
                <div className='firstCardSelecttwo contentCard'>
                    <h3 className='firstNewsCardHeader'>Brand News2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corporis vero sapiente totam eum eveniet sequi quam nemo asperiores culpa libero, eligendi ratione tempora, non fugiat nobis, voluptate aperiam aut.</p>
                </div>
                <div className='firstCardSelectthree contentCard'>
                    <h3 className='firstNewsCardHeader'>Brand News3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corporis vero sapiente totam eum eveniet sequi quam nemo asperiores culpa libero, eligendi ratione tempora, non fugiat nobis, voluptate aperiam aut.</p>
                </div>
                <div className='firstCardSelectfour contentCard'>
                    <h3 className='firstNewsCardHeader'>Brand News4</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corporis vero sapiente totam eum eveniet sequi quam nemo asperiores culpa libero, eligendi ratione tempora, non fugiat nobis, voluptate aperiam aut.</p>
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