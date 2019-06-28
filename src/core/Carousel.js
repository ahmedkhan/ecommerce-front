import React from "react";
import {Link} from "react-router-dom";
import images from '../images/1.jpg'
import images2 from '../images/2.jpg'
import images3 from '../images/3.jpg'
import "../styles.css"

const CarouselPage = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
    
    <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="d-md-block w-100" src={images} alt="First Slide" />
        </div>
        <div className="carousel-item">
            <img className="d-md-block w-100" src={images2} alt="Second Slide"/>
        </div>
        <div className="carousel-item">
            <img className="d-md-block w-100" src={images3} alt="Third Slide"/>
        </div>
    </div>
   
    <Link className="carousel-control-prev" to="#myCarousel" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
    </Link>
    <Link className="carousel-control-next" to="#myCarousel" data-slide="next">
        <span className="carousel-control-next-icon"></span>
    </Link>
</div>
  );
}

export default CarouselPage;