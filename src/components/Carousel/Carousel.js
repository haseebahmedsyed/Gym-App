import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Carousel.css'

function Carousel() {
  return (
    <div className='pk'>

      <div id='pak'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src="https://atmosphere.com.pk/wp-content/uploads/2020/09/male-banner-1.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <img src="https://atmosphere.com.pk/wp-content/uploads/2020/09/equipment-banner.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">

              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="https://atmosphere.com.pk/wp-content/uploads/2021/12/12-13-2021-nadil-website-banner.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">

              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    
    </div>
  )
}

export default Carousel
